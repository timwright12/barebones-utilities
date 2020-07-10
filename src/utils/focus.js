'use strict';

/**
* Focus Management
* @description
*
* Utility methods to trap and untrap focus
*
* @param {object} el Element for trapping container.
* @param {object} options Object of options
*/
class Focus {

	/**
	 * constructor function
	 * @param element Ojbect
	 * @param options Ojbect
	 */
	constructor( el, options = {} ) {

		this.el = el;

		const defaults = {
			setFocus: false
		};

		this.settings = Object.assign( {}, defaults, options );

		// Collact all
		this.focusableElements = this.el.querySelectorAll( 'a, button, input, select, textarea, [tabindex]' );
		this.focusableElementsCount = this.focusableElements.length;
		this.firstElement = this.focusableElementsCount ? this.focusableElements[0] : this.el;
		this.lastElement = this.focusableElementsCount ? this.focusableElements[this.focusableElementsCount - 1] : this.el;

		this.handleBackwardTrap = this.eventTabBackward.bind( this );
		this.handleForwardTrap = this.eventTabForward.bind( this );

	}

	/**
	 * Initialize trapping
	 */
	trap() {

		if ( true === this.settings.setFocus ) {
			// If there are focusable element, focus the first one
			if ( this.focusableElementsCount ) {
				this.firstElement.focus();
			} else if ( 0 === this.focusableElementsCount ) {
				// if there are no focusable elements, focus the container
				this.el.setAttribute( 'tabindex', '-1' );
				this.el.focus();
			}
		}

		this.firstElement.addEventListener( 'keydown', this.handleBackwardTrap, false );
		this.lastElement.addEventListener( 'keydown', this.handleForwardTrap, false );
	}

	/**
	 * Initialize untrapping
	 */
	untrap() {
		this.firstElement.removeEventListener( 'keydown', this.handleBackwardTrap, false );
		this.lastElement.removeEventListener( 'keydown', this.handleForwardTrap, false );

		// Remove this in case it was added
		this.el.removeAttribute( 'tabindex', '-1' );
	}

	/**
	 * Listener for forward tabbing in the UI
	 * @param {object} event Tab keydown event return
	 */
	eventTabForward( e ) {
		if( 9 === e.keyCode && !e.shiftKey ) {
			e.preventDefault();
			this.firstElement.focus();
		}
	}

	/**
	 * Listener for backward tabbing in the UI
	 * @param {object} event Tab keydown event return
	 */
	eventTabBackward( e ) {
		if( e.shiftKey && 9 === e.keyCode ) {
			e.preventDefault();
			this.lastElement.focus();
		}
	}

}

export default Focus;
