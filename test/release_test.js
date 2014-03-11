var grunt = require('grunt');

exports.release = {
  bumpMultipleFiles: function(test){
    test.expect(2);

    var actual = grunt.file.readJSON('test/fixtures/_component.json');
    var expected = grunt.file.readJSON('test/expected/component.json');
    test.equal(actual.version, expected.version, 'should set version 0.0.13');

    actual = grunt.file.readJSON('test/fixtures/_bower.json');
    expected = grunt.file.readJSON('test/expected/bower.json');
    test.equal(actual.version, expected.version, 'should sync bower version to 0.0.13');

    test.done();
  },

  bumpOneFile: function(test){
    test.expect(1);

    var actual = grunt.file.readJSON('test/fixtures/_component2.json');
    var expected = grunt.file.readJSON('test/expected/component2.json');
    test.equal(actual.version, expected.version, 'should set version 0.0.7');

    test.done();
  }
};
