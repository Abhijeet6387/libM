import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function Getbooks() {
  const [booklist, setBooklist] = useState([]);
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  // function to open update modal
  const openModal = (singlebook) => {
    setId(singlebook._id);
    setBookname(singlebook.Name);
    setAuthor(singlebook.Author);
    setSubject(singlebook.Subject);
    setIsOpen(true);
  };
  // function to open view modal
  const openViewModal = (singlebook) => {
    setId(singlebook._id);
    setBookname(singlebook.Name);
    setAuthor(singlebook.Author);
    setSubject(singlebook.Subject);
    setIsViewOpen(true);
  };

  // function to close update modal
  const closeModal = () => setIsOpen(false);
  // function to close view modal
  const closeViewModal = () => setIsViewOpen(false);
  // functions to handle changes
  const onChangeBookname = (e) => {
    setBookname(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onUpdateForm = (e) => {
    e.preventDefault();
    if (bookname === "" || author === "" || subject === "" || id === null) {
      alert("Please fill the details");
    } else {
      console.log(bookname, author, subject);
      axios
        .post("/updatebook/" + id, {
          Name: bookname,
          Author: author,
          Subject: subject,
        })
        .then((res) => {
          alert("book updated");
          console.log(res.data);
          setBookname("");
          setAuthor("");
          setSubject("");
          setId(null);
          closeModal();
          getbooks();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getbooks();
  }, []);

  // function to get booklist
  const getbooks = () => {
    axios
      .get("/getbook")
      .then((res) => {
        // console.log("fetching");
        setBooklist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function to delete a book
  const handleDelete = (id) => {
    axios
      .delete("/deletebook/" + id)
      .then((res) => {
        console.log(res);
        alert("Delete this book ?");
        getbooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card container">
        <div className="card-body table-responsive ">
          {booklist.length === 0 ? (
            <p>Sorry, Books are currently unavailable !</p>
          ) : (
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-8">
                    <h4>Book List</h4>
                  </div>
                  <div className="col-sm-4">
                    <div className="search-box">
                      <i className="fa fa-wh fa-search"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ overflow: "auto", height: "500px" }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Availability</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="getbooks">
                    {booklist.map((singlebook, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{singlebook.Name}</td>
                        <td>{singlebook.Author}</td>
                        <td>{singlebook.Subject}</td>
                        <td>
                          {singlebook.Availability.toString() === "true" ? (
                            <i
                              className=" fa fa-wh fa-light fa-check-circle"
                              style={{ marginLeft: "25px" }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-wh fa-times"
                              style={{ marginLeft: "25px" }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <div className="actions">
                            {/* <i className="fa fa-wh fa-plus"></i> */}
                            <i
                              className="fa fa-fw fa-pencil"
                              onClick={() => openModal(singlebook)}
                            ></i>
                            <i
                              className="fa fa-fw fa-trash"
                              onClick={() => handleDelete(singlebook._id)}
                            ></i>
                            <i
                              className="fa fa-wh fa-eye"
                              onClick={() => openViewModal(singlebook)}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <p className="text-muted">
          Click on the eye button in actions to view the details of the book and
          issue it!
        </p>
      </div>

      {/* Modal for update/edit book */}

      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Edit Book </Modal.Title>
          <i
            className="fa fa-times"
            onClick={closeModal}
            style={{ fontSize: "28px" }}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onUpdateForm} className="container">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={bookname}
                placeholder="Enter Name"
                onChange={onChangeBookname}
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                placeholder="Enter Author's Name"
                onChange={onChangeAuthor}
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                className="form-control"
                value={subject}
                placeholder="Enter Subject"
                onChange={onChangeSubject}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ float: "right" }}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* modal for view book */}
      <Modal show={isViewOpen} onHide={closeViewModal}>
        <Modal.Header>
          <Modal.Title>View Book</Modal.Title>
          <i
            className="fa fa-times"
            onClick={closeViewModal}
            style={{ fontSize: "28px" }}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <p className="col"> Name: {bookname}</p>
            <p className="col"> Subject: {subject}</p>
            <p className="col"> Author: {author}</p>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            // onClick={() => issueBook()}
          >
            Issue {bookname}
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
