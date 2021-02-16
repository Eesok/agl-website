import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className='row'>
				<div className='column'>
					<h2>Column 1</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
						eget elementum magna tristique. Quisque vehicula, risus eget aliquam
						placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
						Praesent scelerisque tortor sed accumsan convalli.
					</p>
				</div>
				<div class='column'>
					<h2>Column 2</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
						eget elementum magna tristique. Quisque vehicula, risus eget aliquam
						placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
						Praesent scelerisque tortor sed accumsan convallis.
					</p>
				</div>

				<div class='column'>
					<h2>Column 3</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
						eget elementum magna tristique. Quisque vehicula, risus eget aliquam
						placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
						Praesent scelerisque tortor sed accumsan convallis.
					</p>
				</div>
			</div>
		);
	}
}

export default Card;
