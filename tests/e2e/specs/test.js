describe('Test home page heading', () => {
  it('Checks h1 has correct dashboard text', () => {
    cy
      .visit('/')
      .contains('h1', 'Welcome to Dashboard');
  });
});

describe('Test pie chart element', () => {
  it('shows pie chart element is visible', () => {
    cy
      .visit('/')
      .get('.c-pie')
      .should('be.visible');
  });
});

describe('Test bar chart element', () => {
  it('shows pie chart element is visible', () => {
    cy
      .visit('/')
      .get('.c-bar')
      .should('be.visible');
  });
});

describe('Test remove button', () => {
  it('Test remove button actually removes element', () => {
    const element = '[data-cy=edit-table] tbody';
    cy.visit('/').get(element).then(($els) => {
      const beforeCount = $els.length;

      cy.get('[data-cy=remove]').first().click();

      cy.get(element).then(($els2) => {
        const currentCount = $els2.length;
        expect(currentCount).to.eq(beforeCount - 1);
      });
    });
  });
});

describe('Tests editable table', () => {
  it('shows that table element can be edited', () => {
    cy
      .visit('/')
      .get('[contenteditable]')
      .first()
      .clear()
      .type('Otemu');

    cy
      .get('[data-cy=edit-table] tbody')
      .contains('Otemu')
      .blur();
  });
});
