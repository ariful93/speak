import React, { Component } from 'react'
import CountryLangList from './CountryLangList';

export default class Speech extends Component {

    constructor(props) {
        super(props)
        this.state = {
            speech: '',
            lang: ['hi-IN', 'en-US', 'ar-SA', 'zh-CN', 'zh-HK', 'zh-TW', 'cs-CZ', 'da-DK', 'nl-BE', 'nl-NL', 'en-AU', 'en-IE', 'en-ZA', 'en-GB', 'en-US', 'fi-FI', 'fr-CA', 'fr-FR', 'de-DE', 'el-GR', 'hi-IN', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'no-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sk-SK', 'es-MX', 'es-ES', 'sv-SE', 'th-TH', 'tr-TR'],
            voices: [],
            rate: 1,
            volume: 1,
            pitch: 1,

        }
        this.onChangeHndle = this.onChangeHndle.bind(this);
        this.handleKeySpeech = this.handleKeySpeech.bind(this);
        this.changeRate = this.changeRate.bind(this)
        this.changePitch = this.changePitch.bind(this)
    }

    componentDidMount = () => {
        window.speechSynthesis.addEventListener('voiceschanged', () => {
            this.state.voices = window.speechSynthesis.getVoices()
        })
    }

    sing = (text) => {

        const speech = new SpeechSynthesisUtterance(text)
        speech.voice = this.state.voices.find(voice => voice.lang === this.state.lang)
        speech.volume = this.state.volume
        speech.pitch = this.state.pitch
        speech.rate = this.state.rate
        window.speechSynthesis.speak(speech);

    }

    handleKeySpeech = (event) => {
        if (event.key === 'Enter') {
            const spech = event.target.value
            this.sing(spech);
        }
    }

    onChangeHndle = (event) => {
        this.setState({
            speech: event.target.value
        })
    }

    changeRate = (event) => {
        this.setState({
            rate: event.target.value,
        })
    }

    changePitch = (event) => {
        this.setState({
            pitch: event.target.value,
        })
    }

    handleVolume = (event) => {
        this.setState({
            volume: event.target.value,
        })
    }

    handleCountry = (event) => {
        this.setState({
            lang: event.target.value
        })
    }


    render() {
        return (
            <div className="wrapper_speech">
                <h3>Enter some text in the input box and press "enter" to hear it. <br></br>change voices using the dropdown menu.</h3>
                <input
                    onKeyDown={this.handleKeySpeech}
                    value={this.state.speech}
                    onChange={this.onChangeHndle}
                    type="text"
                    placeholder="Type here..">

                </input>
                <div className="slider__wrapper-item">
                    <div className="slider_item">
                        <span>{this.state.rate}</span>
                        Rate:<input
                            onChange={this.changeRate}
                            min="0.5"
                            max="2.5"
                            type="range"
                            value={this.state.rate}
                            step="1"

                        >
                        </input>
                    </div>

                    <div className="slider_item">
                        <span>{this.state.pitch}</span>
                        Pitch:<input
                            onChange={this.changePitch}
                            min="0.1"
                            max="2.5"
                            type="range"
                            value={this.state.pitch}
                            step="1"

                        >
                        </input>
                    </div>
                    <div className="slider_item">
                        <span>{this.state.volume}</span>
                        Volume:<input
                            onChange={this.handleVolume}
                            min="0.1"
                            max="5"
                            type="range"
                            value={this.state.volume}
                            step="1"

                        >
                        </input>
                    </div>

                </div>

                <CountryLangList language={this.handleCountry} />

            </div>
        )
    }
}
