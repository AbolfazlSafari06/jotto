import React from 'react'
import PropTypes from 'prop-types';
function GuessWord(props) {
    let content;
    if (props.guesseWords.length === 0) {
        content = (
            <span data-test="guess-instructions">
                try to guess secret word
            </span>
        )
    } else {
        content = (
            <div data-test="gussed-words">
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.guesseWords.map((word, index) => (
                                <tr key={index} data-test="guess-Word">
                                    <td>{word.guesseWord}</td>
                                    <td>{word.letterMatchCount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div data-test="component-gussed-words" className='sdfiuDSb'  >
            {content}
        </div>
    )
}

GuessWord.propTypes = {
    guesseWords: PropTypes.arrayOf(
        PropTypes.shape({
            guesseWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        }
        )
    ).isRequired
}
export default GuessWord
