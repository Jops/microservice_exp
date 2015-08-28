describe('Student', function () {

    var student = { classes: [ 'English', 'Maths', 'Science' ] };

    it('should have correct number of classes', function () {
        student.should.have.property('classes').with.lengthOf(3);
    });

});