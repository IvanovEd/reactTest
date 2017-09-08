import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

/*not working changes due to lesson
 import React from 'react';
 import jsdom from 'jsdom';
 import jquery from 'jquery';
 import TestUtils from 'react-addons-test-utils'
 import ReactDOM from 'react-dom'
 import chai, {expect} from 'chai';
 import {Provider} from 'react-redux';
 import {createStore} from 'redux';
 import reducers from '../src/reducers';
 import chaiJquery from 'chai-jquery';

 // set up testing environment to run like  a browser in teh command line
 //window --> global
 global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
 global.widnow = global.document.defaultView;
 const $ = jquery(global.widnow);

 //build 'renderComponent' helper that should render a given react class
 function renderComponent(ComponentClass, props, state) {
 const componentInstance = TestUtils.renderIntoDocument(
 <Provider store = {createStore(reducers, state)}>
 <ComponentClass {...props}/>
 </Provider>
 );

 return $(ReactDOM.findDOMNode(componentInstance));//produces html
 }

 // build helper for simulating events
 $.fn.simulate = function(eventName, value) {
 if(value) {
 this.val(value);
 }
 TestUtils.Simulate[eventName](this[0]);
 }

 // set up chai-jquery
 chaiJquery(chai, chai.util, $);

 export {renderComponent, expect};
 */

export {renderComponent, expect};
