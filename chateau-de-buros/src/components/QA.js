import React, {useState, useEffect} from "react";
import sanityClient from '../client';

const QA = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        //sanityClient.fetch("*[_type == 'questions']").then(documents => console.log(documents))
        sanityClient.fetch("*[_type == 'questions']").then(documents => setQuestions(documents))
        //sanityClient.fetch("*[_type == 'questions']").then(abs => setQuestions(abs));
    }, []);

    return (
        <div>
            {questions.map((e,i) =>
            <div>
                <p>
                <b> Q{i}: {e.question}</b>
                </p>
                <p>
                {e.answer}
                </p>
            </div>
        )}
        </div>
    )
}

export default QA;
