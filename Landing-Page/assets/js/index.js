/*******************************************************************************
*                           On Load Task Execution                             *
*******************************************************************************/

	jQuery ( document ). ready ( function ()
	{
		console. log (`& it begins...`) ;

		// Animate landing page content container into the page
			jsif_animate (
			{
				"duration": 2000,
				"timing": jsif_makeEaseOut ( jsif_quadTimingPower5 ),
				"draw": function ( progress )
				{
					var left = ( 1 - progress ) * 100 * -1 ;
					jQuery (`#nlp-landing-content-container`) [ 0 ].style.left = left + 'vw' ;
				}
			} ) ;

		// Initialize the timer
			nlp_ringer. init ( jQuery (`#nlp-content-timer-container`) [ 0 ] ) ;

		// Process content scroll
			NLP_processContentScroll () ;
			nlp_customStyles. push ( NLP_processContentScroll ) ; // Perform this task on resize as well

		// Reset all content
			jQuery ( window ). resize () ;
			jQuery (`#nlp-content-container`). scrollTop ( 0 ) ;

		// Hover on category/event card
			jQuery ("body"). on ("mouseenter", ".nlp-category-card", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					jQuery ( this ). addClass ("nlp-hover") ;
					jQuery ( this ). children (".nlp-category-card-icon-container"). addClass ("nlp-hover") ;
					jQuery ( this ). children (".nlp-category-card-category-name"). addClass ("nlp-hover") ;
					jQuery ( this ). children (".nlp-category-card-category-description"). addClass ("nlp-hover") ;
					jQuery ( this ). children (".nlp-category-card-icon-container"). children (".nlp-category-card-indicator"). addClass ("nlp-hover") ;
					jQuery ( this ). children (".nlp-category-card-icon-container"). children (".nlp-category-card-labels"). addClass ("nlp-hover") ;
					jQuery ( this ). children (".nlp-category-card-icon-container"). children (".nlp-category-card-icon"). addClass ("nlp-hover") ;
				}
			} ) ;
			jQuery ("body"). on ("mouseleave", ".nlp-category-card", function ()
			{
				jQuery ( this ). removeClass ("nlp-hover") ;
				jQuery ( this ). children (".nlp-category-card-icon-container"). removeClass ("nlp-hover") ;
				jQuery ( this ). children (".nlp-category-card-category-name"). removeClass ("nlp-hover") ;
				jQuery ( this ). children (".nlp-category-card-category-description"). removeClass ("nlp-hover") ;
				jQuery ( this ). children (".nlp-category-card-icon-container"). children (".nlp-category-card-indicator"). removeClass ("nlp-hover") ;
				jQuery ( this ). children (".nlp-category-card-icon-container"). children (".nlp-category-card-labels"). removeClass ("nlp-hover") ;
				jQuery ( this ). children (".nlp-category-card-icon-container"). children (".nlp-category-card-icon"). removeClass ("nlp-hover") ;
			} ) ;

		// Hover on view more button in category/event card
			jQuery ("body"). on ("mouseenter", ".nlp-category-card-category-view-more", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					jQuery ( this ). addClass ("nlp-hover") ;
				}
			} ) ;
			jQuery ("body"). on ("mouseleave", ".nlp-category-card-category-view-more", function ()
			{
				jQuery ( this ). removeClass ("nlp-hover") ;
			} ) ;

		// Click on view more button in category/event card
			jQuery ("body"). on ("click", ".nlp-category-card-category-view-more", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					var elem = jQuery ( this ) ;
					var elemOpenDrive = elem. attr ("nlp-open-drive-content") ;
					jQuery ( this ). removeClass ("nlp-hover") ;
					jQuery ( this ). addClass ("nlp-active") ;

					setTimeout ( function ()
					{
						jQuery ( elem ). removeClass ("nlp-active") ;
						jQuery ( elem ). addClass ("nlp-hover") ;
					}, 1 ) ;

					setTimeout ( function ()
					{
						var elemCSS = window. getComputedStyle ( elem [ 0 ], null ) ;
						var elemMarginLeft = parseFloat ( elemCSS. getPropertyValue ("margin-left"). replace ("px", 0 ) ) ;
						var elemMarginTop = parseFloat ( elemCSS. getPropertyValue ("margin-top"). replace ("px", 0 ) ) ;

						jQuery ("#nlp-popup-pop-init"). css (
						{
							"left": ( jQuery ( elem ). position (). left + elemMarginLeft ) + "px",
							"top": ( jQuery ( elem ). position (). top + elemMarginTop ) + "px",
							"width": jQuery ( elem ). outerWidth () + "px",
							"height": jQuery ( elem ). outerHeight () + "px",
							"opacity": "1"
						} ) ;

						jQuery ("#nlp-popup-pop-init"). removeClass ("nlp-hidden") ;

						setTimeout ( function ()
						{
							jQuery ("#nlp-popup-pop-init"). animate (
							{
								"left": "0px",
								"top": "0px",
								"width": "100vw",
								"height": "100vh"
							}, 300, "swing", function ()
							{
								if ( elemOpenDrive !== undefined )
								{
									var elemDriveContentId = jQuery ( elem ). attr ("nlp-drive-content-id") ;
									var iframeId = window. encodeURIComponent ( elemDriveContentId ) ;
									window. nlp_showIframe [ iframeId ] = function ()
									{
										jQuery ("#nlp-drive-popup-loading-text"). addClass ("nlp-hidden") ;
										jQuery ("#nlp-drive-popup-body"). addClass ("nlp-loaded-content") ;
										jQuery ("iframe[id='" + iframeId + "']"). removeClass ("nlp-hidden") ;
									} ;

									jQuery ("#nlp-drive-popup-header-download"). attr ("href", "https://drive.google.com/uc?export=download&id=" + elemDriveContentId ) ;
									jQuery ("#nlp-drive-popup-header-download"). attr ("target", "_blank") ;

									var elemContentName = jQuery ( elem ). attr ("nlp-content-name") ;
									jQuery ("#nlp-drive-popup-header-heading"). html ( elemContentName ) ;
									jQuery ("#nlp-drive-popup"). removeClass ("nlp-hidden") ;
									jQuery ("#nlp-drive-popup-body"). append (`
										<iframe
											id="` + iframeId + `"
											class="nlp-iframe nlp-hidden"
											src="` + ("https://drive.google.com/file/d/" + elemDriveContentId + "/preview" ) + `"
											onload="window. nlp_showIframe ['` + iframeId + `'] () ;"
										>
										</iframe>
									`) ;
								}
								else
								{
									jQuery ("#nlp-event-content"). removeClass ("nlp-hidden") ;
									var elemTarget = jQuery ( elem ). attr ("nlp-section-name") ;
									jQuery ("#nlp-event-content-body"). scrollTop ( jQuery ("#nlp-event-content-body"). children (".nlp-categories-container[nlp-section-name='" + "CE / IT / ICT" + "']"). position (). top - ( jQuery ("#nlp-event-content-body"). outerHeight () * 0.3 ) ) ;
								}
							} ) ;

							setTimeout ( function ()
							{
								jQuery ("#nlp-popup-pop-init"). animate (
								{
									"opacity": "0"
								}, 800, "swing", function ()
								{
									jQuery ("#nlp-popup-pop-init"). addClass ("nlp-hidden") ;
								} ) ;
							}, 100 ) ;
						}, 50 ) ;
					}, 100 ) ;
				}
			} ) ;

		// Click on view document links
			jQuery ("body"). on ("click", ".nlp-about-us-fest-detail-card.nlp-category-content-link", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					var elem = jQuery ( this ) ;
					var elemOpenDrive = elem. attr ("nlp-open-drive-content") ;
					jQuery ( this ). removeClass ("nlp-hover") ;
					jQuery ( this ). addClass ("nlp-active") ;

					setTimeout ( function ()
					{
						jQuery ( elem ). removeClass ("nlp-active") ;
						jQuery ( elem ). addClass ("nlp-hover") ;
					}, 1 ) ;

					setTimeout ( function ()
					{
						var elemCSS = window. getComputedStyle ( elem [ 0 ], null ) ;
						var elemMarginLeft = parseFloat ( elemCSS. getPropertyValue ("margin-left"). replace ("px", 0 ) ) ;
						var elemMarginTop = parseFloat ( elemCSS. getPropertyValue ("margin-top"). replace ("px", 0 ) ) ;

						jQuery ("#nlp-popup-pop-init"). css (
						{
							"left": ( jQuery ( elem ). position (). left + elemMarginLeft ) + "px",
							"top": ( jQuery ( elem ). position (). top + elemMarginTop ) + "px",
							"width": jQuery ( elem ). outerWidth () + "px",
							"height": jQuery ( elem ). outerHeight () + "px",
							"opacity": "1"
						} ) ;

						jQuery ("#nlp-popup-pop-init"). removeClass ("nlp-hidden") ;

						setTimeout ( function ()
						{
							jQuery ("#nlp-popup-pop-init"). animate (
							{
								"left": "0px",
								"top": "0px",
								"width": "100vw",
								"height": "100vh"
							}, 300, "swing", function ()
							{
								if ( elemOpenDrive !== undefined )
								{
									var elemDriveContentId = jQuery ( elem ). attr ("nlp-drive-content-id") ;
									var iframeId = window. encodeURIComponent ( elemDriveContentId ) ;
									window. nlp_showIframe [ iframeId ] = function ()
									{
										jQuery ("#nlp-drive-popup-loading-text"). addClass ("nlp-hidden") ;
										jQuery ("#nlp-drive-popup-body"). addClass ("nlp-loaded-content") ;
										jQuery ("iframe[id='" + iframeId + "']"). removeClass ("nlp-hidden") ;
									} ;

									jQuery ("#nlp-drive-popup-header-download"). attr ("href", "https://drive.google.com/uc?export=download&id=" + elemDriveContentId ) ;
									jQuery ("#nlp-drive-popup-header-download"). attr ("target", "_blank") ;

									var elemContentName = jQuery ( elem ). attr ("nlp-content-name") ;
									jQuery ("#nlp-drive-popup-header-heading"). html ( elemContentName ) ;
									jQuery ("#nlp-drive-popup"). removeClass ("nlp-hidden") ;
									jQuery ("#nlp-drive-popup-body"). append (`
										<iframe
											id="` + iframeId + `"
											class="nlp-iframe nlp-hidden"
											src="` + ("https://drive.google.com/file/d/" + elemDriveContentId + "/preview" ) + `"
											onload="window. nlp_showIframe ['` + iframeId + `'] () ;"
										>
										</iframe>
									`) ;
								}
								else
								{
									jQuery ("#nlp-event-content"). removeClass ("nlp-hidden") ;
									var elemTarget = jQuery ( elem ). attr ("nlp-section-name") ;
									jQuery ("#nlp-event-content-body"). scrollTop ( jQuery ("#nlp-event-content-body"). children (".nlp-categories-container[nlp-section-name='" + "CE / IT / ICT" + "']"). position (). top - ( jQuery ("#nlp-event-content-body"). outerHeight () * 0.3 ) ) ;
								}
							} ) ;

							setTimeout ( function ()
							{
								jQuery ("#nlp-popup-pop-init"). animate (
								{
									"opacity": "0"
								}, 800, "swing", function ()
								{
									jQuery ("#nlp-popup-pop-init"). addClass ("nlp-hidden") ;
								} ) ;
							}, 100 ) ;
						}, 50 ) ;
					}, 100 ) ;
				}
			} ) ;

		// Hover on close button in event content
			jQuery ("body"). on ("mouseenter", ".nlp-event-content-header-close", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					jQuery ( this ). addClass ("nlp-hover") ;
				}
			} ) ;
			jQuery ("body"). on ("mouseleave", ".nlp-event-content-header-close", function ()
			{
				jQuery ( this ). removeClass ("nlp-hover") ;
			} ) ;

		// Click on close button in event content
			jQuery ("body"). on ("click", ".nlp-event-content-header-close", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					var elem = jQuery ( this ) ;

					jQuery ("#nlp-event-content"). css (
					{
						"pointer-events": "none"
					} ) ;
					jQuery ("#nlp-event-content"). animate (
					{
						"opacity": "0"
					}, 600, "swing", function ()
					{
						jQuery ("#nlp-event-content"). addClass ("nlp-hidden") ;
						jQuery ("#nlp-event-content"). css (
						{
							"pointer-events": "auto",
							"opacity": "1"
						} ) ;
					} ) ;
				}
			} ) ;

		// Hover on download button in drive popup
			jQuery ("body"). on ("mouseenter", ".nlp-drive-popup-header-download", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					jQuery ( this ). addClass ("nlp-hover") ;
				}
			} ) ;
			jQuery ("body"). on ("mouseleave", ".nlp-drive-popup-header-download", function ()
			{
				jQuery ( this ). removeClass ("nlp-hover") ;

		// Hover on close button in drive popup
			jQuery ("body"). on ("mouseenter", ".nlp-drive-popup-header-close", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					jQuery ( this ). addClass ("nlp-hover") ;
				}
			} ) ;
			jQuery ("body"). on ("mouseleave", ".nlp-drive-popup-header-close", function ()
			{
				jQuery ( this ). removeClass ("nlp-hover") ;
			} ) ;
			} ) ;

		// Click on close button in drive popup
			jQuery ("body"). on ("click", ".nlp-drive-popup-header-close", function ()
			{
				if ( jQuery ( this ). hasClass ("nlp-disabled") !== true )
				{
					var elem = jQuery ( this ) ;

					jQuery ("#nlp-drive-popup"). css (
					{
						"pointer-events": "none"
					} ) ;
					jQuery ("#nlp-drive-popup"). animate (
					{
						"opacity": "0"
					}, 600, "swing", function ()
					{
						jQuery ("#nlp-drive-popup"). addClass ("nlp-hidden") ;
						jQuery ("#nlp-drive-popup-header-heading"). html ("") ;
						jQuery ("#nlp-drive-popup-header-download"). removeAttr ("href") ;
						jQuery ("#nlp-drive-popup-header-download"). removeAttr ("target") ;
						jQuery ("#nlp-drive-popup-body"). removeClass ("nlp-loaded-content") ;
						jQuery ("#nlp-drive-popup-loading-text"). removeClass ("nlp-hidden") ;
						jQuery ("#nlp-drive-popup-body"). children ("iframe"). remove () ;
						jQuery ("#nlp-drive-popup"). css (
						{
							"pointer-events": "auto",
							"opacity": "1"
						} ) ;
					} ) ;
				}
			} ) ;
	} ) ;
