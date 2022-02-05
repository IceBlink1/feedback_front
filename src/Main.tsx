import React, {FormEvent} from "react";
import './Main.css'

class MainState {
    feedback: string = ''
    author: string = 'Anonymous'
}

class MainProps {
    action: string = ''
    method: string = ''
}

export class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props);
        this.state = new MainState();
        this.updateFeedback = this.updateFeedback.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e: FormEvent) {
        e.preventDefault();

        fetch(this.props.action, {
            method: this.props.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({feedback: this.state.feedback, author: this.state.author})
        }).then(
            (resp) => {
                resp.json().then(
                    value => {
                        alert("Feedback submitted. Thanks!")
                    },
                    reason => {
                        alert(reason)
                    }
                )
            },
            (reason) => {
                alert(reason)
            }
        );

        this.setState({feedback: '', author: 'Anonymous'});
    }

    updateFeedback(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            feedback: e.currentTarget.value
        })
    }

    updateAuthor(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            author: e.currentTarget.value
        })
    }

    render() {
        return <div className="Main">
            <form
                id="main-feedback"
                action={this.props.action}
                method={this.props.method}
                onSubmit={this.onSubmit.bind(this)}>
                <h1>Feedback form</h1>
                <label>
                    <span className="text">Ваши 20 слов обо мне:</span><br/>
                    <textarea name="feedback"
                           value={this.state.feedback}
                           onChange={this.updateFeedback}/><br/>
                </label>
                <br/>
                <label>
                    <span className="text">Подпишитесь, если хотите:</span><br/>
                    <input type="text" name="author" value={this.state.author}
                              onChange={this.updateAuthor}/><br/>
                </label><br/>
                <div className="align-right">

                    <button className="button-23" role="button" type="submit">Submit</button>
                    {/*<button type="submit">Submit</button>*/}
                </div>
            </form>
        </div>;
    }

}