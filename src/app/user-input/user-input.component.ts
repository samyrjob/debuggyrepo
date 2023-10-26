import { Component } from '@angular/core';
import { ScrapingService } from '../scraping.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  title = 'Welcome to My Component';
  titleStyles = {
    'text-align': 'center',
  };

  searchQuery: string = ''; // Declare the searchQuery property

  // constructor(private scrapingService: ScrapingService) {}

  // async onButtonClick() {
  //   try {
  //     if (this.searchQuery.trim() === '') {
  //       // Handle empty search query as needed
  //       return;
  //     }

  //     const result = await this.scrapingService.scrapeWebsite(this.searchQuery);
  //     // Handle and display the scraped result
  //     this.title = result;
  //   } catch (error) {
  //     //   console.error('Error:', error);
  //     // }
  //   }
  // }
  constructor(private scrapingService: ScrapingService) {}

  // Function to handle the search
  async performSearch(query: string) {
    try {
      const searchResults = await this.scrapingService.scrapeWebsite(query);
      console.log('Search results:', searchResults);
      // You can now process and display the results in your component.
    } catch (error) {
      // console.error('Error:', error);
      // Handle errors as needed.
    }
  }
}
