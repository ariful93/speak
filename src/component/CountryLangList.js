import React, { Component } from 'react'

export default class CountryLangList extends Component {

    constructor(props) {

        super(props)

    }

    render() {
        return (
            <div className="slider_item">
                <select value={this.props.lang} onChange={this.props.language} >
                    <option value="en-US">United States</option>
                    <option value="hi-IN">Hindi</option>
                    <option value="ar-SA">Arabic</option>
                    <option value="zh-CN">China</option>
                    <option value="zh-HK">Hong Kong SAR China</option>
                    <option value="zh-TW">Taiwan</option>
                    <option value="cs-CZ">Czech Republic</option>
                    <option value="da-DK">Denmark</option>
                    <option value="nl-BE">Belgium</option>
                    <option value="nl-NL">Netherlands</option>
                    <option value="en-AU">Australia</option>
                    <option value="en-IE">Ireland</option>
                    <option value="en-ZA">South Africa</option>
                    <option value="en-GB">United Kingdom</option>
                    <option value="fi-FI">Finland</option>
                    <option value="fr-CA">Canada</option>
                    <option value="fr-FR">France</option>
                    <option value="de-DE">Germany</option>
                    <option value="el-GR">Greece</option>
                    <option value="hu-HU">Hungary</option>
                    <option value="id-ID">Indonesia</option>
                    <option value="it-IT">Italy</option>
                    <option value="ja-JP">Japan</option>
                    <option value="ko-KR">South Korea</option>
                    <option value="no-NO">Norway</option>
                    <option value="pl-PL">Poland</option>
                    <option value="pt-BR">Brazil</option>
                    <option value="pt-PT">Portugal</option>
                    <option value="ro-RO">Romania</option>
                    <option value="ru-RU">Russia</option>
                    <option value="sk-SK">Slovakia</option>
                    <option value="tr-TR">Turkey</option>
                </select>
            </div>

        )
    }
}
