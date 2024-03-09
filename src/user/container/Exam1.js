import React, { useEffect, useState } from "react";

function Exam1(props) {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const getData = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();

    // console.log(data);
    setQuotes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = () => {
    let fData = quotes.filter(
      (v) =>
        v.text.toLowerCase().includes(search) ||
        v.author.toLowerCase().includes(search)
    );

    fData = fData.sort((a, b) => {
        if (sort === "a") {
            return a.text.localeCompare(b.text)
        } else if (sort === "z") {
            return b.text.localeCompare(a.text)
        } else if (sort === "az") {
            return a.author.localeCompare(b.author)
        } else if (sort === "za") {
            return b.author.localeCompare(a.author)
        }
    })

    return fData;
  };

  const finalData = handleFilter();
//   console.log(finalData);

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <select name="athuor" onChange={(event) => setSort(event.target.value)}>
        <option value={"0"}>--Select--</option>
        <option value={"a"}>Text: A - Z</option>
        <option value={"z"}>Text: Z - A</option>
        <option value={"az"}>Author: A - Z</option>
        <option value={"za"}>Author: Z - A</option>
      </select>
      {finalData.map((v) => (
        <>
          <h3>{v.text}</h3>
          <p>{v.author}</p>
        </>
      ))}
    </div>
  );
}

export default Exam1;
