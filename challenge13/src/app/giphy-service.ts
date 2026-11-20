import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

export interface Gif{
  id: string;
  title: string;
  images: {fixed_height: {url: string}}
}

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private readonly baseURL = 'https://api.giphy.com/v1/gifs/search'

  async search(query: string, offset = 0): Promise<Gif[]>{
    const params = new URLSearchParams({
      api_key: environment.giphyApiKey,
      q: query,
      limit: '25',
      offset: String(offset),
      rating: 'g',
      lang: 'en',
    });

    const resp = await fetch(`${this.baseURL}?${params}`);
    if (!resp.ok) throw new Error(`Error Giphy: ${resp.status}`);

    const json = await resp.json();
    return json.data
  }

}
