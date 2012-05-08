# thanks to TJ: https://github.com/visionmedia/mocha/issues/106#issuecomment-2979500
TESTS = $(shell find test/server test/shared -name "*.test.js")

test:
	@./node_modules/.bin/mocha $(TESTS)

.PHONY: test
