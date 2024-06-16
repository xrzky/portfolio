const listArticles = () => {
  const articles = [
    {
      id: "1",
      title: "API Design 101: From Basics to Best Practices",
      description: `For example, to add a new product (Create), you would make a POST request to /api/products where the product details are sent in the request body. To retrieve products (Read), you need to fetch data with a GET request from /products. For updating product information (Update), we use PUT or PATCH requests to /products/:id, where id is the id of a product we need to update. Removing is similar to updating; we make a DELETE request to /products/:id where id is the product we need to remove (Delete).`,
      image: "https://picsum.photos/id/1/200/175",
      date: "11/06/2024",
    },
    {
      id: "2",
      title: "A JavaScript Interview Question That 90% of People Get Wrong",
      description:
        "Did you think of an answer immediately? Hold on before you respond. Perhaps you’re already familiar with type conversions, but how do we calculate the length of the toString function? And how is the length of a normal function calculated?",
      image: "https://picsum.photos/id/2/200/175",
      date: "12/06/2024",
    },
    {
      id: "3",
      title:
        "The resume that got a software engineer a $300,000 job at Google.",
      description:
        "My name is Alex Nguyen and I previously worked as a software engineer at Amazon and Microsoft before joining Google. Above is the resume I used to apply to Google and land an exciting $300,000 offer. Its the resume I like to share working with candidates who are applying for software engineering roles. But before digging into resume strategies that worked for me, lets first talk about the elephants in the room.",
      image: "https://picsum.photos/id/3/200/175",
      date: "13/06/2024",
    },
  ];

  return articles;

};

export default listArticles;
