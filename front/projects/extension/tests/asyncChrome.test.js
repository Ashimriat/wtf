import chromeApi from '../src/chromeHolder';
import { describe, it, before, beforeEach, afterEach } from 'mocha';
import chai from 'chai';
import chaiPromised from 'chai-as-promised';


chai.use(chaiPromised).should();

const getObjectFunctionsPaths = (obj, obtainedHistory = '') => {
	if (!obj) {
		throw 'Object argument is not provided';
	}
	if (typeof obj === 'object' && !Boolean(obj)) {
		throw 'First argument provided is not an object';
	}
	const keys = Object.keys(obj);
	let res = [];
	let objProp, history;
	keys.forEach(key => {
		objProp = obj[key];
		if (typeof objProp === 'object') {
			history = `${obtainedHistory}.${key}`;
			const functionsPaths = getObjectFunctionsPaths(objProp, history);
			// todo: избавиться от О^2
			res = functionsPaths.map(path => `${history}.${path}`);
		} else if (typeof objProp === 'function') {
			res = [key];
		}
	});
	return res;
};

describe('Functions paths getters', function () {
	context('no functions in object', function () {
		it ('returns empty array', function () {
			const res = getObjectFunctionsPaths({ num: 5, str: 'string' });
			res.should.be.an('array');
			res.should.have.lengthOf(0);
		})
	});
	
	context('have complicated object provided', function () {
		it ('returns array of paths to properties-functions of object in format [parent1.parent2...parentN.funcProp', function () {
			const res = getObjectFunctionsPaths({
				path1: 'string',
				path2: 5,
				path3: false,
				path4: null,
				path5: undefined,
				path6: () => {},
				path7: {
					path11: 'innerString',
					path12: () => {},
					path13: {
						path111: () => {}
					}
				},
			});
			res.should.equal(['path6', 'path7.path12', 'path7.path13.path111']);
		});
	});
});

describe.skip("'asyncMethods' decorator", function () {
	let testedFunction, testedFunctionPaths, counter = 0;
	
	before('Get all functions paths', function () {
		testedFunctionPaths = getObjectFunctionsPaths(chromeApi);
	});
	
	beforeEach('get tested property', function () {
		const testedFunctionPath = testedFunctionPaths[counter];
		counter++;
		const pathParts = testedFunctionPath.split('.');
		pathParts.forEach(pathPart => {
			testedFunction = !testedFunction ?
				chromeApi[pathPart] :
				testedFunction[pathPart];
		});
	});
	
	it('Makes from all properties-functions of class an async functions', function () {
	
	});
	
	afterEach('reset tested function', function () {
		testedFunction = undefined;
	})
});
