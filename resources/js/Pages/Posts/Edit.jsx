import React, { useState } from "react";

import Layout from "../../Layouts/Default";

import { Inertia } from "@inertiajs/inertia";

export default function EditPost({ errors, post }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    // function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();

        Inertia.put(`/posts/${post.id}`, {
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
                            <span className="font-weight-bold">Edit Post</span>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={updatePost}>
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
                                {errors.title && (
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
