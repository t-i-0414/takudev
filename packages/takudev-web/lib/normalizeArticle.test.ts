import { normalizeArticle } from './normalizeArticle';

describe('normalizeArticle', () => {
  it.each([
    { article: null, expected: null },
    { article: undefined, expected: null },
    { article: { data: null }, expected: null },
    { article: { data: undefined }, expected: null },
    { article: { data: { id: null } }, expected: null },
    { article: { data: { id: undefined } }, expected: null },
    { article: { data: { attributes: null } }, expected: null },
    { article: { data: { attributes: undefined } }, expected: null },
  ])(
    'should return $expected if $article are entered',
    ({ article, expected }) => {
      expect.hasAssertions();

      expect(normalizeArticle(article)).toBe(expected);
    },
  );

  it('should return normalized article if article is entered', () => {
    expect.hasAssertions();

    const article = {
      data: {
        id: 'testId',
        attributes: {
          title: 'testTitle',
          slug: 'testSlug',
          description: 'testDescription',
          content: 'testContent',
          publishedAt: '2020-01-01T00:00:00.000Z',
          tags: {
            data: [
              {
                attributes: {
                  name: 'testTag1',
                },
              },
              {
                attributes: {
                  name: 'testTag2',
                },
              },
            ],
          },
        },
      },
    };

    const expected = {
      id: 'testId',
      title: 'testTitle',
      slug: 'testSlug',
      description: 'testDescription',
      content: 'testContent',
      publishedAt: new Date('2020-01-01T00:00:00.000Z'),
      tagList: ['testTag1', 'testTag2'],
    };

    expect(normalizeArticle(article)).toStrictEqual(expected);
  });
});
