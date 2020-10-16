import React, { Component } from 'react'
import '../App.css'
import bullhorn from '../assets/img/bullhorn.png'
import logo from '../assets/img/kemenag.png'

export default class Signin extends Component {
    render() {
        return (
            <div className="container">
                 <div className="section">
                  <div className="row">
                    <div className="col s12 m6">
                      <div className="row-1">
                        <div className="content-info">
                          <div className="img-style">
                            <img src={bullhorn} className="ic-info"/>
                            Pengumuman!
                          </div>
                        </div>
                        <div>
                          <p>Tanggal Pendataan 2020-02-10 s/d 2020-05-31 untuk jenjang MA, MTS, MI, RA</p>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6">
                      <div className="row-2">
                        <div className="content-signin">
                          <img className="logo-signin" src={logo}/>
                        </div>
                        <h3>Emis Madrasah</h3>
                        <p>Silakan masukan Nama Pengguna dan Kata Sandi</p>
                        <div className="input-field">
                          <i className="material-icons prefix">account_circle</i>
                          <input id="icon_prefix" type="text" className="validate"/>
                          <label for="icon_prefix">Nama Pengguna</label>
                        </div>
                        <div className="input-field">
                          <i className="material-icons prefix">lock_outline</i>
                          <input id="icon_prefix" type="text" class="validate"/>
                          <label for="icon_prefix">Kata Sandi</label>
                        </div>
                        <div className="input-field">
                          <button className="btn waves-effect btn-masuk waves-light blue" type="submit" name="action">MASUK
                            <i className="material-icons right">send</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
            </div>
        )
    }
}
