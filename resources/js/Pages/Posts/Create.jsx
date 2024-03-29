import React, { useState } from "react";

// import layout
import Layout from "../../Layouts/Default";

// import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function createPost({ errors }) {
    // define state
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // function "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        Inertia.post("/posts", {
            title: title,
            content: content,
        });
    };

    return (
        <Layout>
            <div className="row" style={{ marginTop: "100px" }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">
                                Tambah Post
                            </span>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={storePost}>
                                <div className="mb-3">
                                    <label
                                        htmlFor=""
                                        className="form-label fw-bold"
                                    >
                                        Judul
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        placeholder="Masukan judul post"
                                    />
                                </div>
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label
                                        htmlFor=""
                                        className="form-label fw-bold"
                                    >
                                        Konten
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="form-control"
                                        value={content}
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                        placeholder="Masukan isi konten"
                                    ></textarea>
                                </div>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-md btn-success me-2"
                                    >
                                        <i className="fa fa-save"></i> Simpan
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-md btn-warning"
                                    >
                                        <i className="fa fa-redo"></i> Batal
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
