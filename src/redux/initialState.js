
const initialState = {
    columns: [
      {
        id: 1,
        listId: '1',
        title: 'Books',
        icon: 'book',
      },
      {
        id: 2,
        listId: '1',
        title: 'Movies',
        icon: 'film',
      },
      {
        id: 3,
        listId: '1',
        title: 'Games',
        icon: 'gamepad',
        
      },
      {
        id: 3,
        listId: '2',
        title: 'Food',
        icon: 'qq',
        
      }

    ],
  
    cards: [
      { id: 1, columnId: 1, title: 'This is Going to Hurt', isFavorite: true },
      { id: 2, columnId: 1, title: 'Interpreter of Maladies', isFavorite: true},
      { id: 3, columnId: 2, title: 'Harry Potter', isFavorite: true },
      { id: 4, columnId: 2, title: 'Star Wars', isFavorite: true },
      { id: 5, columnId: 3, title: 'The Witcher', isFavorite: true },
      { id: 6, columnId: 3, title: 'Skyrim', isFavorite: true }
    ],

    lists: [
      {
        id: '1',
        title: 'Things to do...',
        description: 'Interesting things I want to check out'
      },
     {
        id: '2',
        title: 'Test list',
        description: 'Lorem Ipsum'
     }
  ],
   searchString: '',
  };
  
  export default initialState;