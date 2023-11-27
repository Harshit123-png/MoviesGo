import { Injectable } from '@angular/core';
import { UrlModal } from '../services/url.modal'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesgoService {

  constructor(private httpclient: HttpClient) { }

  getMovies() {
    return this.httpclient.get(UrlModal._URL + '/th/getshow',
      {
        headers: new HttpHeaders({
        })
      })
  }


  getsingleShow(id: any) {
    return this.httpclient.get(UrlModal._URL + '/th/getsingleshow/' + id)
  }

  getcity() {
    return this.httpclient.get(UrlModal._URL + '/th/getcity',
      {
        headers: new HttpHeaders
      })
  }

  gettheaterbycity(type: any) {
    return this.httpclient.get(UrlModal._URL + '/th/gettheaterbyCity/' + type)
  }

  getSingleTheater(id: any) {
    return this.httpclient.get(UrlModal._URL + '/th/gettheaterbyId/' + id)
  }


  getTicket(
    data: any,
  ) {
    return this.httpclient.post(
      UrlModal._URL + '/th/getTicket',
      data,
      {
        headers: new HttpHeaders({
        }),
      }
    )
  }

  bookTicket(
    data: any,
  ) {
    return this.httpclient.post(
      UrlModal._URL + '/th/bookTicket',
      data,
      {
        headers: new HttpHeaders({
        }),
      }
    )
  }

  addTheater(
    data: any,
  ) {
    return this.httpclient.post(
      UrlModal._URL + '/th/creatTheater',
      data,
      {
        headers: new HttpHeaders({
        }),
      }
    )
  }


  cusAuth(
    data: any
  ) {
    return this.httpclient.post(
      UrlModal._URL + '/th/auth',
      data,
      {
        headers: new HttpHeaders({
        }),
      }
    )
  }

  authCus(data: any) {
    console.log(data)
    return this.httpclient.post(
      UrlModal._URL + '/th/authCus', data, {
      headers: new HttpHeaders({
      })
    }
  )
  }
  creatQr(
    data:any,
  ) {
    return this.httpclient.post(
      UrlModal._URL + '/th/creatQr',
      data,
      {
        headers: new HttpHeaders({
        }),
      }
    );
  }

  payTicket(
    data: any,
  ) {
    return this.httpclient.post(
      UrlModal._URL + '/th/payforseat',
      data,
      {
        headers: new HttpHeaders({
        }),
      }
    )
  }

}
