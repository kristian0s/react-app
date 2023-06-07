import { useEffect, useState } from "react";

type PostType = {
  id: number;
  title: string;
  description: string;
  hashtag: string[];
  img_url: string;
};

const Instagram = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const instagramPost: PostType = {
    id: 1,
    title: "My dog",
    description: "My cool belgian Malinois. His name is Zen!",
    hashtag: ["cool", "dog", "belgianmalionios", "family"],
    img_url:
      "https://www.dogstrust.ie/dogimages/7130206_jessie_20220430111702_b25e053d-5f4d-4df1-af8e-9b065fa4fbde_800.jpg",
  };

  const getPost = () => {
    fetch("http://localhost:3000/instagram")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container">
      <div className="instagram">
        <header className="instagram__header">
          <h1 className="instagram__header__title">Instagram</h1>
          <div className="instagram__header__actions">
            <button
              className="instagram__header__btn"
              onClick={() => setModalOpen(true)}
            ></button>
            <img
              className="instagram__header__profile"
              src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
              alt="instagram profile icon"
            />
          </div>
        </header>
        <hr />
        <body>
          <div className="instagram__feed">
            <div>1</div>
          </div>
        </body>
        {modalOpen ? (
          <>
            <div
              className="modal__overlay"
              onClick={() => setModalOpen(false)}
            ></div>
            <div
              className="modal-instagram"
              // onClick={() => setModalOpen(false)}
            >
              <div className="modal-instagram__header">
                <div className="modal-instagram__header__title">
                  Share new post:
                </div>
                <div
                  className="modal-instagram__header__close"
                  onClick={() => setModalOpen(false)}
                >
                  X
                </div>
              </div>
              <div className="modal-instagram__body">
                <div>
                  <div className="field">
                    <label htmlFor="title">Post title</label>
                    <input
                      id="post_title"
                      className="input input--rounded"
                      name="title"
                      type="text"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="description">Post Description</label>
                    <textarea
                      id="post_desc"
                      className="input input--rounded"
                      name="description"
                    ></textarea>
                  </div>
                  <div className="field">
                    <label htmlFor="img">Post img</label>
                    <input
                      id="post_img"
                      className="input input--rounded"
                      name="img"
                      type="text"
                    />
                  </div>
                  <button className="btn">Post</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Instagram;
