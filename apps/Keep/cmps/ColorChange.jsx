export function ColorChange({ onChangeNoteColor, note }) {
    return (
        <div className="btn-color flex">
                <button name="red" type="button" onClick={() => { onChangeNoteColor(event, note) }}>ttt</button>
                <button name="green" type="button" onClick={() => { onChangeNoteColor(event, note) }}>ttt</button>
                <button name="lightblue" type="button" onClick={() => { onChangeNoteColor(event, note) }}>ttt</button>
                <button name="purple" type="button" onClick={() => { onChangeNoteColor(event, note) }}>ttt</button>
                <button name="pink" type="button" onClick={() => { onChangeNoteColor(event, note) }}>ttt</button>
        </div>
    )
}

