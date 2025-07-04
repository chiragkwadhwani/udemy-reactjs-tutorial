import Options from "./Options.jsx";

export default function Question({question, dispatch, answer}) {
    return (
        <div>
            <div>{question.question}</div>
            <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    )
};