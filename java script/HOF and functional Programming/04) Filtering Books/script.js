let BookInformation = [
    {
    author:'haruki murakami',
    name: 'After Dark',
    published:2006
    },

    {
     author: 'agatha christine',
     name: 'The murder at the win carrage',
     published: 2011
    },

    {
        author: 'amish tripati',
        name: 'Warrior of mithila',
        published: 2005
    },

    {
      author: 'chitra Banerjee',
      name: 'The palace of illusion',
      published: 2012
    },
    {
        author:'jane auston',
        name: ' Pride and prejudice',
        published: 2010
    }
]

const fillteredBook = BookInformation.filter(function(item){
    return item.published<=2010
})

const CapitalLizedAuthorName = fillteredBook.map((book)=>{
    const authorName = book.author.charAt(0).toUpperCase()+book.author.slice(1);
    return [
        authorName,
        book.name,
        book.published
    ]
})

console.log(CapitalLizedAuthorName);
//A= Fyodor Dostoyevsky N = White Nights P = 2010
//A = Agatha christine N= the murder at the win carrage
//A = Amish tripati N = Warrior of mithila 
//A = Jane auston N = Pride and prejudice
// A= chitra Banerjee N = the palace of illusion


// let authorName = document.getElementById('Aname')
// let bookName = document.getElementById('Bname')
// let publishedYear = document.getElementById('Pyear')
// let infoBtn = document.getElementById('Info')

// infoBtn.addEventListener('click',fillterBook);

// function fillterBook(){
//     let autor = authorName.value;
//     let book =  bookName.value;
//     let yrs =  publishedYear.value;
    
//     document.getElementById('result').innerHTML = `Author name ${autor}, ${book},${yrs}`
// }
