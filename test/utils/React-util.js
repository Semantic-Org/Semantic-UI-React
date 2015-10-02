import _ from 'lodash';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

//
// RenderTree
//

/**
 * Render a ReactElement and use helpful test utility methods against it.
 * @param {ReactElement} reactElement The element to render.
 * @returns {RenderedTree}
 */
class RenderedTree {
  constructor(reactElement) {
    this._root = TestUtils.renderIntoDocument(reactElement);
    this.all = TestUtils.findAllInRenderedTree(this._root, _.isObject);
  }

  /**
   * Return all the children of the rendered element.  Excludes the element itself.
   * @returns {ReactElement[]} An array of elements that are children of the rendered element.
   */
  children() {
    return this.all.slice(1);
  }

  /**
   * Find first ReactElement anywhere in the tree with matching className.
   * @param {string} className The className property to search on.
   * @returns {ReactComponent} first React component anywhere in the tree with matching className.
   */
  findClass(className) {
    return TestUtils.findRenderedDOMComponentWithClass(this._root, className);
  }

  /**
   * Find first React element anywhere in the tree with matching html tag.
   * @param {string} elementType The html tag to search on.
   * @returns {ReactComponent} first React component anywhere in the tree with matching html tag.
   */
  findTag(elementType) {
    return TestUtils.findRenderedDOMComponentWithTag(this._root, elementType);
  }

  /**
   * Find first React element anywhere in the tree with matching html tag.
   * @param {ReactComponent} componentClass The ReactComponent tag to search on.
   * @returns {ReactComponent} first React component anywhere in the tree with matching React Element Type.
   */
  findType(componentClass) {
    return TestUtils.findRenderedComponentWithType(this._root, componentClass);
  }

  /**
   * Find first React element in the rendered tree.
   * @returns {ReactComponent} first React component in rendered tree.
   */
  first() {
    return _.first(this.all);
  }

  /**
   * Find last React element in the rendered tree.
   * @returns {ReactComponent} last React component in rendered tree.
   */
  last() {
    return _.last(this.all);
  }

  /**
   * Find all React elements anywhere in the tree with matching className.
   * @param {string} className The className property to search on.
   * @returns {ReactComponent[]} array of React components in the tree with matching className.
   */
  scryClass(className) {
    return TestUtils.scryRenderedDOMComponentsWithClass(this._root, className);
  }

  /**
   * Find all React elements in the tree with matching html tag.
   * @param {string} elementType The html tag to search on.
   * @returns {ReactComponent[]} array of React components in the tree with matching html tag.
   */
  scryTag(elementType) {
    return TestUtils.scryRenderedDOMComponentsWithTag(this._root, elementType);
  }

  /**
   * Find all React elements in the tree with matching html tag.
   * @param {ReactComponent} componentClass The ReactComponent type to search on.
   * @returns {ReactComponent[]} all React components in the tree with matching React Element Type.
   */
  scryType(componentClass) {
    return TestUtils.scryRenderedComponentsWithType(this._root, componentClass);
  }

  /**
   * Finds all instances of components in the rendered tree that are DOM components with `text` as a child.
   * @param {string} text Components with `text` as their children will be returned.
   * @returns {[]} an array of all the matches.
   */
  scryText(text) {
    if (!_.isString(text)) {
      throw new Error('scryText() requires a string argument, received: ' + text);
    }
    return TestUtils.findAllInRenderedTree(this._root, (element) => {
      if (!TestUtils.isDOMComponent(element)) {
        return false;
      }

      let isMatch = false;
      React.Children.forEach(element.props.children, (child) => {
        if (child === text) {
          isMatch = true;
        }
      });
      return isMatch;
    });
  }

  /**
   * Like scryText but expects there to be one result, and returns that one result,
   * or throws exception if there is any other number of matches besides one.
   * @param {string} text The element containing this text will be returned.
   * @return {!ReactDOMComponent} The one match.
   */
  findText(text) {
    var all = this.scryText(text);
    if (all.length !== 1) {
      throw new Error(`Did not find exactly one match (found: ${all.length}) for text: "${text}"`);
    }
    return all[0];
  }
}

//
// Shallow Renderer
//

/**
 * Shallow render a ReactElement and get the result back.
 * @param {ReactElement} reactElement The element to render.
 * @returns {*} Tree rendered one level deep.
 */
global.shallowRender = function(reactElement) {
  var shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(reactElement);
  return shallowRenderer.getRenderOutput();
};

//
// Render
//

/**
 * Render a ReactElement and get back the root DOM node with helper methods to make assertions on.
 * @param {ReactElement|XML} reactElement The element to render.
 * @returns {RenderedTree} RenderedTree test utils.
 */
global.render = function(reactElement) {
  return new RenderedTree(reactElement);
};
