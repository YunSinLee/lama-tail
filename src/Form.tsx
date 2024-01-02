import React from "react";
import { useEffect, useState } from "react";
import {client} from './supabase/index'

const Form = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [pages, setPages] = useState([]);
    function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }
    function onChangeContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value);
    }

    async function fetchPages() {
        const { data } = await client.from("page").select("*")

        setPages(data)
    }

    useEffect(() => {
        fetchPages()
    }, [])

    async function addPage() {
        const { data, error } = await client
            .from('page')
            .insert([
                { title, content },
            ])
            .select()
        console.log(data, error)
        fetchPages();
    }

    return (
        <div>
        <form>
            <input type="text" placeholder="제목" value={title} onChange={onChangeTitle} />
            <textarea placeholder="내용" value={content} onChange={onChangeContent} />
            <button type="submit" onClick={addPage}>작성</button>
        </form>
        {pages.length > 0 ? pages.map((page: any) => {
            return (
                <div>
                    <h1>{page.title}</h1>
                    <p>{page.content}</p>
                </div>
            )
        }
        ) : <p>데이터가 없습니다.</p>}
        </div>
    );
}

export default Form;