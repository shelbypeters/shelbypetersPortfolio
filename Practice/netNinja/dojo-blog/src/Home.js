import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p> { name } </p> */}
        </div>
    );
}
 
export default Home;

// EXAMPLE: useState

// import { useState } from 'react';

// const Home = () => {
//     // let name = 'mario';
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         // name = 'luigi';
//         // console.log(name);
//         setName('luigi');
//         setAge(30);
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// EXAMPLE: eventHandler(onClick)
 
// export default Home;

// const Home = () => {
//     let name = 'mario';

//     const handleClick = (eventObject) => {
//         console.log('hello, ninjas', eventObject);
//     }

//     const handleClickAgain = (name, eventObject) => {
//         console.log(`hello ` + name, eventObject.target);
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={(eventObject) => handleClickAgain('mario')}>Click me again</button>
//         </div>
//     );
// }
 
// export default Home;