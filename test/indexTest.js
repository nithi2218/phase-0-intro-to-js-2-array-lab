describe('index.js', () => {
  describe('cats', () => {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', () => {
      expect(cats).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
    });
  });

  describe('Array functions', () => {
    beforeEach(() => {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', () => {
      it('appends a cat to the end of the cats array', () => {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(['Milo', 'Otis', 'Garfield', 'Ralph']);
      });
    });

    describe('destructivelyPrependCat(name)', () => {
      it('prepends a cat to the beginning of the cats array', () => {
        destructivelyPrependCat('Bob');

        expect(cats).to.have.ordered.members(['Bob', 'Milo', 'Otis', 'Garfield']);
      });
    });

    describe('destructivelyRemoveLastCat()', () => {
      it('removes the last cat from the cats array', () => {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(['Milo', 'Otis']).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', () => {
      it('removes the first cat from the cats array', () => {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(['Otis', 'Garfield']).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', () => {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', () => {
        expect(appendCat('Broom')).to.have.ordered.members(['Milo', 'Otis', 'Garfield', 'Broom']);

        expect(cats).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });

    describe('prependCat(name)', () => {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', () => {
        expect(prependCat('Arnold')).to.have.ordered.members(['Arnold', 'Milo', 'Otis', 'Garfield']);

        expect(cats).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });

    describe('removeLastCat()', () => {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', () => {
        expect(removeLastCat()).to.have.ordered.members(['Milo', 'Otis']);

        expect(cats).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });

    describe('removeFirstCat()', () => {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', () => {
        expect(removeFirstCat()).to.have.ordered.members(['Otis', 'Garfield']);

        expect(cats).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });
  });
});
