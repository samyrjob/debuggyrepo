import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScrapingService {
  // Define the base URL for the API
  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL
  constructor(private http: HttpClient) {}

  async scrapeWebsite(searchQuery: string | undefined): Promise<string> {
    if (typeof searchQuery === 'string') {
      // const searchUrl = `https://streaminze.org/?s=${searchQuery}`;
      // const searchUrl = 'http://localhost:3000' + req.url;
      // const searchUrl = `${this.apiUrl}/api/search/?s=${searchQuery}`;
      const searchUrl = 'http://localhost:3000/api/search/?s=' + searchQuery;

      try {
        const htmlContent = await this.http
          .get(searchUrl, { responseType: 'text' })
          .toPromise();
        // Process the HTML content and return the result
        const result = this.extractDataFromHtml(htmlContent);
        return result;
      } catch (error) {
        throw new Error(
          'Error scraping the website: ' + (error as Error).message
        ); // Type assertion
      }
    } else {
      throw new Error('Invalid search query');
    }
  }

  private extractDataFromHtml(htmlContent: string | undefined): string {
    // Implement the logic to extract the data from the HTML content
    // For demonstration, we'll just return a sample result
    return 'Sample scraped result';
  }
}
