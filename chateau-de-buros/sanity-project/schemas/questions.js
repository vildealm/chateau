export default {
    name: 'questions',
    type: 'document',
    title: 'Q&A',
    fields: [
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
      {
        name: 'question',
        type: 'string',
        title: 'Question',
      },
      {
        name: 'answer',
        type: 'string',
        title: 'Answer',
      },
    ]
}