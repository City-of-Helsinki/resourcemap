import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import Sidebar from 'components/Sidebar';
import MapContainer from 'components/MapContainer';
import messages from './messages';
import { Wrapper } from './wrappers';

class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			spaces: [
				{
					category: 'Alarivintilat',
					id: 'c-1',
					svgtype: 'path',
					name: 'Alarivin huone 1',
					available: 'taken',
					info: '',
					d:
						'M59.39,308.5 L59.39,385.76 L-0.93,385.76 L-0.93,308.5 L59.39,308.5 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-2',
					svgtype: 'path',
					name: 'Alarivin huone 2',
					available: 'taken',
					info: '',
					d:
						'M139.86,327.5 L139.86,385.75 L64.5,385.75 L64.5,327.5 L139.86,327.5 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-3',
					svgtype: 'path',
					name: 'Alarivin huone 3',
					available: 'available',
					info: '',
					d:
						'M214.06,327.5 L214.06,409.77 L144.98,409.77 L144.98,327.5 L214.06,327.5 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-4',
					svgtype: 'path',
					name: 'Alarivin huone 4',
					available: 'available',
					info: '',
					d:
						'M257.67,327.5 L257.67,395.41 L219.17,395.41 L219.17,327.5 L257.67,327.5 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-5',
					svgtype: 'path',
					name: 'Alarivin huone 5',
					available: 'available',
					info: 'Alarivin huone 5',
					d:
						'M299.89,327.5 L299.89,395.41 L262.78,395.41 L262.78,327.5 L299.89,327.5 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-6',
					svgtype: 'path',
					name: 'Alarivin huone 6',
					available: 'available',
					info: '',
					d:
						'M377.64,324.5 L377.64,419.29 L302.01,419.29 L302.01,324.5 L377.64,324.5 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-7',
					svgtype: 'path',
					name: 'Alarivin huone 7',
					available: 'available',
					info: '',
					d:
						'M460.75,255.575382 L460.75,368.75 L381.36,368.75 L381.36,259.431082 L460.75,255.575382 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-8',
					svgtype: 'path',
					name: 'Alarivin huone 8',
					available: 'soon',
					info: '',
					d:
						'M535.61,278.08 L535.61,368.75 L467.07,368.75 L467.07,278.08 L535.61,278.08 Z',
				},
				{
					category: 'Alarivintilat',
					id: 'c-9',
					svgtype: 'path',
					name: 'Alarivin huone 9',
					available: 'available',
					info: '',
					d:
						'M609.8,247.679487 L609.8,416.25 L543.27,416.25 L543.27,252.41293 L609.8,247.679487 ',
				},

				{
					category: 'Pohjoisseinä',
					id: 'north-1',
					svgtype: 'path',
					name: 'Pohjoisen huone 1',
					available: 'available',
					info: '',
					d:
						'M620.22,-0.83 L620.22,67.5 L584.17,67.5 L584.17,-0.83 L620.22,-0.83 Z',
				},
				{
					category: 'Pohjoisseinä',
					id: 'north-2',
					svgtype: 'path',
					name: 'Pohjoisen huone 2',
					available: 'soon',
					info: '',
					d:
						'M662.21,-0.83 L662.21,67.5 L626.16,67.5 L626.16,-0.83 L662.21,-0.83 Z',
				},
				{
					category: 'Pohjoisseinä',
					id: 'north-3',
					svgtype: 'path',
					name: 'Pohjoinen kolme',
					available: 'soon',
					info: '',
					d:
						'M702.9,-0.83 L702.9,67.5 L668.15,67.5 L668.15,-0.83 L702.9,-0.83 Z',
				},
				{
					category: 'Pohjoisseinä',
					id: 'north-4',
					svgtype: 'path',
					name: 'Pohjoisen huone neljä',
					available: 'available',
					info: '',
					d:
						'M801.36,-0.83 L801.36,67.5 L708.83,67.5 L708.83,-0.83 L801.36,-0.83 Z',
				},
				{
					category: 'Ylin rivi',
					id: 'top-row-1',
					svgtype: 'path',
					name: 'Huone 1',
					available: 'available',
					info: '',
					d:
						'M66.83,147.2 L66.83,196.5 L17.43,196.5 L17.43,147.2 L66.83,147.2 Z',
				},
				{
					category: 'Ylin rivi',
					id: 'top-row-2',
					svgtype: 'path',
					name: 'Huone Kaksi',
					available: 'soon',
					info: '',
					d:
						'M205.86,151.22 L205.86,198.2503 L110.946312,193.298371 L113.911999,151.22 L205.86,151.22 Z',
				},
				{
					category: 'Ylin rivi',
					id: 'top-row-3',
					svgtype: 'path',
					name: 'Kolmas Huone',
					available: 'soon',
					info: '',
					d:
						'M289.63,151.22 L289.63,198.439832 L213.37,201.562682 L213.37,151.22 L289.63,151.22 Z',
				},
				{
					category: 'Ylin rivi',
					id: 'top-row-4',
					svgtype: 'path',
					name: 'Huone 4',
					available: 'taken',
					info: '',
					d:
						'M347.223505,166.5 L344.304526,203.353476 L296.5,198.618775 L296.5,166.5 L347.223505,166.5 Z',
				},
				{
					category: 'Ylin rivi',
					id: 'top-row-5',
					svgtype: 'path',
					name: 'Viides 5',
					available: 'available',
					info: '',
					d:
						'M1659.2,127.5 L1659.2,245.91 L1523.2,245.91 L1523.2,127.5 L1659.2,127.5 ',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-1',
					svgtype: 'path',
					name: 'Keskihuone 1',
					available: 'soon',
					info: '',
					d:
						'M66.83,203.21 L66.83,252.5 L17.43,252.5 L17.43,203.21 L66.83,203.21 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-2',
					svgtype: 'path',
					name: 'Keskihuone 2',
					available: 'soon',
					info: '',
					d:
						'M114.532366,202.683274 L114.286557,200.859627 L111.3,201.06 L111.3,202.513112 L114.532366,202.683274 Z M112.801579,201.06 L114.3,201.06 L114.3,201.09 L112.8,201.09 L112.801579,201.06 Z M112.801579,201.06 L112.878855,199.592074 L205.86,204.486888 L205.86,238.327362 L116.988888,243.36618 L111.313443,201.260373 L112.8,201.06 L112.801579,201.06 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-3',
					svgtype: 'path',
					name: 'Kolmas Keskihuone',
					available: 'soon',
					info: '',
					d:
						'M240.513924,255 L214.14,255 L214.14,209.06104 L273.69,206.586371 L273.69,256.900696 L259.956315,270.345016 L258.920555,269.527341 L240.927094,255.322474 L240.513924,255 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-4',
					svgtype: 'path',
					name: 'Keskihuone 4',
					available: 'available',
					info: '',
					d:
						'M285.74,209.819227 L285.74,206.73 L284.18,206.73 L284.09657,209.727678 L285.74,209.819227 Z M284.18,208.23 L284.24,208.23 L284.24,209.73 L284.18,209.73 L284.18,208.23 Z M284.18,208.23 L284.26343,206.732322 L344.713735,210.09977 L345.766202,266.448864 L295.652182,270.238737 L282.74,256.91767 L282.74,208.23 L284.18,208.23 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-5',
					svgtype: 'path',
					name: 'Tila 1',
					available: 'taken',
					info: '',
					d:
						'M428.7,227.531316 L381.36,229.421073 L381.36,193.26 L428.7,193.26 L428.7,227.531316 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-6',
					svgtype: 'path',
					name: 'Tila Lorem',
					available: 'available',
					info: '',
					d:
						'M481.83,193.26 L481.83,225.531081 L434.92,227.411327 L434.92,193.26 L481.83,193.26 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'middle-7',
					svgtype: 'path',
					name: 'Tila Ipsum',
					available: 'available',
					info: '',
					d:
						'M535.61,193.26 L535.61,223.5316 L488.05,225.420765 L488.05,193.26 L535.61,193.26 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'lower-middle-1',
					svgtype: 'path',
					name: 'Tila Ipsum',
					available: 'available',
					info: '',
					d:
						'M205.86,244.088878 L205.86,294.06 L113.091004,294.06 L117.060215,249.32881 L205.86,244.088878 Z',
				},
				{
					category: 'Keskihuoneet',
					id: 'lower-middle-2',
					svgtype: 'path',
					name: 'Loremipsum',
					available: 'available',
					info: '',
					d:
						'M238.184072,262.12 L256.6,277.137688 L256.6,294.06 L214.14,294.06 L214.14,262.12 L238.184072,262.12 Z',
				},
			],
			highlighted: '',

			currentSpace: {
				id: 'Tilan id',
				title: 'Tilan nimi',
				available: null,
			},

			tooltipState: {
				current: null,
				visible: false,
			},
			x: 0,
			y: 0,
			isClicked: false,
		};

		this.roomRef = React.createRef();
		this.highlightSpaceType = this.highlightSpaceType.bind(this);
		this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
		this.handleSpaceClick = this.handleSpaceClick.bind(this);
		this.spaceTooltip = this.spaceTooltip.bind(this);
		this.resetActiveSpace = this.resetActiveSpace.bind(this);
	}

	handleSpaceClick(event, space) {
		this.spaceTooltip(event.target, space);
	}

	spaceTooltip(spaceElement, space) {
		const spaceItem = space;
		const rect = spaceElement.getBoundingClientRect();
		const x = Math.round(rect.left);
		const y = Math.round(rect.top);
		const width = rect.width;
		const xPos = Math.round(x + rect.width / 2);

		let spaceTitle = spaceItem.name;
		let showTooltip = false;
		let currentSpaceId = spaceElement.id;

		if (this.state.currentSpace.title === spaceTitle) {
			showTooltip = false;
			spaceTitle = '';
			currentSpaceId = '';
		} else {
			showTooltip = true;
		}

		this.setState(function(prevState, props) {
			return {
				tooltipState: {
					visible: showTooltip,
				},
				currentSpace: {
					id: currentSpaceId,
					title: spaceTitle,
					available: spaceItem.available,
				},
				x: xPos,
				y: y,
			};
		});
	}

	highlightSpaceType(highlight) {
		let hl = highlight;
		if (this.state.highlighted === hl) {
			hl = '';
		}

		this.setState(function(prevState, props) {
			return {
				highlighted: hl,
				currentSpace: {
					title: '',
					id: '',
					available: '',
				},
				tooltipState: {
					visible: false,
				},
			};
		});
	}

	resetActiveSpace() {
		this.setState((prevState, props) => {
			return {
				currentSpace: {
					id: '',
					title: '',
					available: '',
				},
				tooltipState: {
					visible: false,
				},
			};
		});
	}

	onSpaceNameClick(space) {
		const spaceElementId = `#${space.id}`;
		const spaceElement = this.roomRef.current.querySelector(spaceElementId);
		this.spaceTooltip(spaceElement, space);
	}

	render() {
		const {
			spaces,
			structures,
			icons,
			highlighted,
			currentSpace,
			tooltipState,
			x,
			y,
		} = this.state;

		return (
			<Wrapper>
				<MapContainer
					spaces={spaces}
					highlighted={highlighted}
					currentSpace={currentSpace}
					tooltipState={tooltipState}
					handleSpaceClick={this.handleSpaceClick}
					x={x}
					y={y}
					roomRef={this.roomRef}
					onTooltipClick={this.resetActiveSpace}
				/>

				<Sidebar
					spaces={spaces}
					currentSpace={currentSpace}
					onSpaceCategoryClick={this.highlightSpaceType}
					onSpaceNameClick={this.onSpaceNameClick}
				/>
			</Wrapper>
		);
	}
}

export default Container;
