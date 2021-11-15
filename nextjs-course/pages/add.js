import React, { useRef } from "react";

export default function Add() {

    // Avec 'useRef' je peux select des inputs
    const enWord = useRef();
    const frWord = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

    // Je crée l'objet 'newWord' que je vais send avec les values saisies ds les inputs
        const newWord = {
            en: enWord.current.value,
            fr: frWord.current.value
        }

        fetch("/api/vocapi", {
            method: "POST",
            body: JSON.stringify(newWord),
            headers: {
                "Content-Type": "application/json"
            }
        })
            // Je reçois les data
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            // Je vide les inputs
            enWord.current.value = "";
            frWord.current.value = "";
    }

    return (
        <div className="container p-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor="addEn" className="form-label">
                    Ajouter un mot en anglais
                </label>
                <input ref={enWord} type="text" className="form-control" id="addEn"/>
                <label htmlFor="addFr" className="form-label">
                    Ajouter un mot en français
                </label>
                <input ref={frWord} type="text" className="form-control" id="addFr"/>
                <button className="btn btn-primary mt-4">
                    Ajouter
                </button>
            </form>
        </div>
    )
}
