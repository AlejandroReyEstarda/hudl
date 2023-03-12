import Header from './header.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Header {
    /**
     * define selectors using getter methods
     */
    open () {
      return super.open('products');
  }
}

export default new ProductPage();