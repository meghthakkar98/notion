/*******************************************************************************
*                               Global Constants                               *
*******************************************************************************/

	// Global resize config
		nlp_numericValueStyles = new Object () ;
		nlp_customStyles = new Array () ;

	// Resize iterations simulator config
		nlp_maxResizeIterations = 20 ;
		nlp_resizeIterationCount = 0 ;
		nlp_cacheWindowWidth = 0 ;
		nlp_cacheWindowHeight = 0 ;
		nlp_resizeIterationTimeout = 200 ;

	// Page specific global config
		nlp_isCoverPageScrolledThrough = false ;
		nlp_isFooterScrolledIntoPage = false ;
		nlp_showLogoAfterCoverPageScrolledThrough = true ;
		nlp_maxRingsInRow = 2 ;
		nlp_spaceBetweenRowsOfRings = 100 ;
		nlp_targetDate = "03/22/2020" ;
		nlp_categoryCardAnimations = new Object () ;
		nlp_showIframe = new Object () ;

		nlp_eventPopupContent = `
			<div class="nlp-about-us-fest-details nlp-category-content">
				<div class="nlp-about-us-fest-detail-card nlp-category-content-link" nlp-open-drive-content nlp-drive-content-id="1qLBqnQWITLzM6bF3QFG56i_k3rV0WDFI" nlp-content-name="Rules & Regulations - Notion 2020">
					<div class="nlp-about-us-fest-detail-icon-container">
						<div class="nlp-about-us-fest-detail-icon-image nlp-pdf-icon"></div>
					</div>
					<div class="nlp-about-us-fest-detail-value">
						Rules & Regulations
					</div>
				</div>
				<a class="nlp-about-us-fest-detail-card nlp-category-content-link nlp-disabled nlp-inverse nlp-bigger" href="http://notion.ljinstitutes.org/registration" target="_blank">
					<div class="nlp-about-us-fest-detail-value nlp-full-length">
						Register Now !!!!
					</div>
				</a>
				<div class="nlp-about-us-fest-detail-card nlp-category-content-link" nlp-open-drive-content nlp-drive-content-id="1CAqqycACafVwbk-1g1fdnFpWns27IRL6" nlp-content-name="Events' Schedule - Notion 2020">
					<div class="nlp-about-us-fest-detail-icon-container">
						<div class="nlp-about-us-fest-detail-icon-image nlp-pdf-icon"></div>
					</div>
					<div class="nlp-about-us-fest-detail-value">
						Events' Schedule
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="CE / IT / ICT">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						CE / IT / ICT
					</div>
					<div class="nlp-categories-main-text">CE Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-ce-mastermind" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/CE-Mastermind.png');"></div>
								<div class="nlp-category-card-labels">1 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/CE.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Master Mind</div>
							<div class="nlp-category-card-category-description">
								Coders for life? Code, code, repeat.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Individual
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 10:30am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 50/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1PV4qr6hqFw5qqmeAs_uspgBXC7XsOAF4" nlp-content-name="Master Mind - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ce-codeauction" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/CE-CodeAuction.png');"></div>
								<div class="nlp-category-card-labels">2 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/CE.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Code Auction</div>
							<div class="nlp-category-card-category-description">
								Got the skills to bid and buy? Along with a sharp mind for coding. This is your moment.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 - 4 Members ) 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 12:30pm to 3:30pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 80/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1CETLzkNQTnycL8WnLjvjA9NdbqHPgSLT" nlp-content-name="Code Auction - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ce-runtinee
						rror" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/CE-RuntimeTerror.png');"></div>
								<div class="nlp-category-card-labels">3 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/CE.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Runtime Terror</div>
							<div class="nlp-category-card-category-description">
								Is coding your calling? How well can you solve a problem in real world? Time to share it with all.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 - 4 Members) 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:00am to 11:30am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1ImjnTd82q_8e9rjpPJ7dSz_aYVcyx3_S" nlp-content-name="Runtime Terror - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ce-accessdenied" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/CE-AccessDenied.png');"></div>
								<div class="nlp-category-card-labels">4 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/CE.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Access Denied</div>
							<div class="nlp-category-card-category-description">
								Hack your way through the problems and emerge to be crowned the king.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 1 - 3 Members ) 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 11:30am to 2:30pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1CdrDsZUOIZDWWeun9AqGU6_qo315vObv" nlp-content-name="Access Denied - Event Details">View more</div>
						</div>	
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="Mech / Auto">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						Mech / Auto
					</div>
					<div class="nlp-categories-main-text">Mech / Auto Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-me-mechahunt" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/ME-MechaHunt.png');"></div>
								<div class="nlp-category-card-labels">5 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/ME.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Mecha Hunt</div>
							<div class="nlp-category-card-category-description">
								Test your Mech Brain along with the fun of a treasure hunt.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 3 - 5 Members ) 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 12:30pm to 3:30pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1Au6L6kEL1-QXL2_r-mhdhNlST3IuGBTC" nlp-content-name="Mecha Hunt - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-me-3dprinting" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/ME-3DPrinting.png');"></div>
								<div class="nlp-category-card-labels">6 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/ME.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">3D Printing</div>
							<div class="nlp-category-card-category-description">
								The magic of 3D printing combined with a competition to satisfy your inner keeda of miracles.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Individual 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 11:00am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 200/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="17ylcRC6lLuVDVY5w2-x3TsyOnUArUWhk" nlp-content-name="3D Printing - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-me-fastndcurious" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/ME-FastAndCurious.png');"></div>
								<div class="nlp-category-card-labels">7 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/ME.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Fast and Curious</div>
							<div class="nlp-category-card-category-description">
								How well do you know your cars? Let’s find out.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Individual 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:30am to 12:30pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 60/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1UPf877pY_FZY_ZWAH3DOD5mxDsQ3oJT_" nlp-content-name="Fast and Curious - Event Details">View more</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="EC / IC">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						EC / IC
					</div>
					<div class="nlp-categories-main-text">EC / IC Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-ec-technician" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/EC-Technician.png');"></div>
								<div class="nlp-category-card-labels">8 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/EC.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">The Technician</div>
							<div class="nlp-category-card-category-description">
								Electro-geeks are you ready to send the current of Josh and create wonders with a laptop and Arduinos ?? Then this one’s for you.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 - 3 Members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 11:30am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1ipLkK7loLn1X9_jolD2i0u4ka5nsfSYv" nlp-content-name="Technician - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ec-technomania" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/EC-Technomania.png');"></div>
								<div class="nlp-category-card-labels">9 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/EC.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Technomania</div>
							<div class="nlp-category-card-category-description">
								A fun and exciting event to find the best geek out there.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 Members ) 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:00am to 11:00am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 80/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1uCQmpab_mZ7CbIQIkkORRMWygMihUH-J" nlp-content-name="Technomania - Event Details">View more</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="Civil">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						Civil
					</div>
					<div class="nlp-categories-main-text">Civil Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-civil-bridgeit" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Civil.png');"></div>
								<div class="nlp-category-card-labels">10 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Civil.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Bridge It</div>
							<div class="nlp-category-card-category-description">
								Wake up your inner builder with sticks and glue!
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 3-5 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 1pm to 5pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1VdfO_vmg0VBS3qa_yh7Fwc7orwXGDcHD" nlp-content-name="Bridge It - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-civil-begborrowsteal" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Civil-BegBorrowSteal.png');"></div>
								<div class="nlp-category-card-labels">11 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Civil.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Beg Borrow Steal</div>
							<div class="nlp-category-card-category-description">
								A hunt for next on & off field expert civil Engineer
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 3-5 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:00am to 12:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1pdU13I_19zYn4Eoa5oaY2FoYfnceL98O" nlp-content-name="Beg Borrow Steal - Event Details">View more</div>
						</div>
						<div class="nlp-categories-content">
						<div id="nlp-category-card-chemical-br" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Civil-BlindBat.png');"></div>
								<div class="nlp-category-card-labels">12 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Civil.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Blind Bat</div>
							<div class="nlp-category-card-category-description">
								Show your expertise in materials without seeing!
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 12:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 80/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1wbyhuiygaTgOv714ZzW8HS4FO4GiUO8l" nlp-content-name="Blind Bat - Event Details">View more</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="Chemical">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						Chemical
					</div>
					<div class="nlp-categories-main-text">Chemical Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-chemical-chemocar" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Chem-ChemoCar.png');"></div>
								<div class="nlp-category-card-labels">13 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Chem.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Chem O Car</div>
							<div class="nlp-category-card-category-description">
								Fuel the josh coz we are bringing you the chem-o-car where not just participants but their cars battle to cross the ultimate finish line and be crowned the champion.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 1-3 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 2:30pm to 4pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1FUqKwkyFD4caQ9CUg8aD3522Z82ljDoR" nlp-content-name="Chem O Car - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-chemical-chemocar" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Chem-ChemoHunt.png');"></div>
								<div class="nlp-category-card-labels">14 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Chem.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Chem O Hunt</div>
							<div class="nlp-category-card-category-description">
								A hunt to find the next Mendeleev or Madam Curie who can prove their genius in chemistry by playing three challenging rounds and winning the ultimate battle.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 3-5 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 12:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 80/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1DmMQiTWjBc6103QM1v4QiHJi0vSSmmtx" nlp-content-name="Chem O Hunt - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-chemical-chemocar" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Chem-ChemoQuiz.png');"></div>
								<div class="nlp-category-card-labels">15 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Chem.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Chem O Quiz</div>
							<div class="nlp-category-card-category-description">
								Have a passion for chemistry and love showing it off? Then this one’s the perfect event for you. Battle against the chem-geeks to become the diamond raised from the carbon.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 3-4 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:00am to 11:00am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 50/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1Y4KXDK_tz-WdlDyRxAv-6qmF9cUc9SUq" nlp-content-name="Chem O Quiz - Event Details">View more</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="Non-Tech">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						Non-Tech
					</div>
					<div class="nlp-categories-main-text">Non-Tech Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-ec-technician" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/NT-Braingle.png');"></div>
								<div class="nlp-category-card-labels">16 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/NT.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Braingle</div>
							<div class="nlp-category-card-category-description">
								The Event for procrastinators and lazy people who love logic and math but hate getting out of their beds!!! A must experience to test your skills.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 - 4 Members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 12:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 80/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="15xapgcDOQ9IBtJbJynUvGw4XEXXMPVNP" nlp-content-name="Braingle - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ec-technician" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/NT-MemeWar.png');"></div>
								<div class="nlp-category-card-labels">17 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/NT.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Meme War</div>
							<div class="nlp-category-card-category-description">
								Make memes not war!! Show your meme-making creativity and be the ultimate MEME-LORD of LJIET!
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 1 - 2 Members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 12:30pm to 1:30pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 50/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1QhtwkzGaZEKmvBlRI9UiuS5MdN5VYU1N" nlp-content-name="Meme War - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ec-technician" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/NT-GameOfShows.png');"></div>
								<div class="nlp-category-card-labels">18 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/NT.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Game Of Shows</div>
							<div class="nlp-category-card-category-description">
								Think you have seen every TV show worth watching? Then do participate and let us test your knowledge.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 2 - 3 Members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:00am to 11:30am
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 60/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1SFLYJ_OulW-gatdZdPc3h84Fvp-q2dwj" nlp-content-name="Game Of Shows - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ec-technician" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/NT-TreasureHunt.png');"></div>
								<div class="nlp-category-card-labels">19 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/NT.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Treasure Hunt</div>
							<div class="nlp-category-card-category-description">
								Get ready to pan through the corners of college you never thought you'd see & to find that one hidden treasure!!!
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 3 - 5 Members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 11:30am to 2:30pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 100/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="14F3Q9ffKumcbfSgQZx1xenwQ8oRbX_69" nlp-content-name="Treasure Hunt - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-ec-technician" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/NT-Sketchit.png');"></div>
								<div class="nlp-category-card-labels">20 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/NT.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Sketch It</div>
							<div class="nlp-category-card-category-description">
								All the artsy nerds, get your pencils and pens ready because this is your chance.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>:Individual 
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22d March, 03:00pm to 6:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 50/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1rYvO3GldeDxMMm6v4mPK4WmF-3V3UyeK" nlp-content-name="Sketch It - Event Details">View more</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="nlp-categories-container" nlp-section-name="Robotics">
				<div class="nlp-categories-main-container">
					<div class="nlp-categories-main-heading">
						Robotics
					</div>
					<div class="nlp-categories-main-text">Robotics Description</div>
					<div class="nlp-categories-content">
						<div id="nlp-category-card-robotics-aquabot" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Robo-AquaBot.png');"></div>
								<div class="nlp-category-card-labels">21 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Robo.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Aqua Bot</div>
							<div class="nlp-category-card-category-description">
								Beep boop boop beep as the participants’ robots strove their way through the ultimate path set by our team.
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 1 - 5 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 09:00am to 01:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 200/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1TWaInjxh5Se3AUodysgDSVlj8xV0D7Mu" nlp-content-name="AquaBot - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-robotics-lightning" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Robo-Lightning.png');"></div>
								<div class="nlp-category-card-labels">22 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Robo.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Lightning as fast</div>
							<div class="nlp-category-card-category-description">
								Get Set Go!! May the best robot win!
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 1 - 5 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>22nd March, 02:00pm to 06:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 200/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1W-5n0qKNeUXUcPIasrvC__yRTq_6294l" nlp-content-name="Lightning as Fast - Event Details">View more</div>
						</div>
						<div id="nlp-category-card-robotics-trackit" class="nlp-category-card">
							<div class="nlp-category-card-icon-container">
								<div class="nlp-category-card-icon" style="background-image: url('./assets/img/Robo-TrackIt.png');"></div>
								<div class="nlp-category-card-labels">23 / 23</div>
								<div class="nlp-category-card-indicator" style="background-image: url('./assets/img/Robo.png');"></div>
							</div>
							<div class="nlp-category-card-category-name">Track It</div>
							<div class="nlp-category-card-category-description">
								Follow the line and follow it to the point! Get your accuracy shoes on! 
								<br/>
								<br/><span style="font-weight: 700;">Type:&nbsp;</span>Team ( 1 - 5 members )
								<br/><span style="font-weight: 700;">Timing:&nbsp;</span>23nd March, 09:00am to 01:00pm
								<br/><span style="font-weight: 700;">Fees:&nbsp;</span><span class="nlp-roboto-medium">₹</span> 200/-
							</div>
							<div class="nlp-category-card-category-view-more" nlp-open-drive-content nlp-drive-content-id="1jdCqntBP5hanek8sSjTuC0yGCmi7V3fI" nlp-content-name="Track It - Event Details">View more</div>
						</div>

					</div>
				</div>
			</div>

			</div>


			<div class="nlp-about-us-fest-details nlp-category-content" style="background-color: rgba( 17, 17, 17, 0.4 );">
				<div class="nlp-about-us-fest-detail-card nlp-category-content-link" nlp-open-drive-content nlp-drive-content-id="1qLBqnQWITLzM6bF3QFG56i_k3rV0WDFI" nlp-content-name="Rules & Regulations - Notion 2020">
					<div class="nlp-about-us-fest-detail-icon-container">
						<div class="nlp-about-us-fest-detail-icon-image nlp-pdf-icon"></div>
					</div>
					<div class="nlp-about-us-fest-detail-value">
						Rules & Regulations
					</div>
				</div>
				<a class="nlp-about-us-fest-detail-card nlp-category-content-link nlp-disabled nlp-inverse nlp-bigger" href="http://notion.ljinstitutes.org/registration" target="_blank">
					<div class="nlp-about-us-fest-detail-value nlp-full-length">
						Register Now !!!!
					</div>
				</a>
				<div class="nlp-about-us-fest-detail-card nlp-category-content-link" nlp-open-drive-content nlp-drive-content-id="1CAqqycACafVwbk-1g1fdnFpWns27IRL6" nlp-content-name="Events' Schedule - Notion 2020">
					<div class="nlp-about-us-fest-detail-icon-container">
						<div class="nlp-about-us-fest-detail-icon-image nlp-pdf-icon"></div>
					</div>
					<div class="nlp-about-us-fest-detail-value">
						Events' Schedule
					</div>
				</div>
			</div>
		` ;

/*******************************************************************************
*                               Global Functions                               *
*******************************************************************************/

	// Populate additional data upon load

		jQuery ( window ). on ("load", function ()
		{
			jQuery ("#nlp-event-content-loading-text"). addClass ("nlp-hidden") ;
			jQuery ("#nlp-event-content-body"). addClass ("nlp-loaded-content") ;
			jQuery ("#nlp-event-content-body"). append ( nlp_eventPopupContent ) ;
		} ) ;

	// Scale all components on resize
		jQuery ( window ). on ("resize", function ()
		{
			var windowWidth = jQuery ( window ). width () ;
			var windowHeight = jQuery ( window ). height () ;
			console. log (`Resizing dynamic content: ${ windowWidth } * ${ windowHeight }`) ;

			// Update calculations as per current window size
				EK_ratioCalc () ;
				console. log ("Updated ratio multiplier: " + ratio ) ;

			// Re-initialize timer
				console. log (`Reinitializing the timer`) ;
				nlp_ringer. init ( jQuery (`#nlp-content-timer-container`) [ 0 ] ) ;

			// Resize dynamically added elements

				for ( var selector in nlp_numericValueStyles )
				{
					var properties = nlp_numericValueStyles [ selector ] ;
					for ( var property in properties )
					{
						var value = properties [ property ] ;
						jQuery ( selector ). css ( property, `${ value * ratio }px` ) ;
					}
				}
				for ( var index in nlp_customStyles )
				{
					nlp_customStyles [ index ] () ;
				}

			// Simulate resize function

				if ( windowWidth === nlp_cacheWindowWidth && windowHeight === nlp_cacheWindowHeight )
				{
					nlp_resizeIterationCount += 1 ;
				}
				else
				{
					nlp_resizeIterationCount = 0 ;
					nlp_cacheWindowWidth = windowWidth ;
					nlp_cacheWindowHeight = windowHeight ;
				}
				if ( nlp_resizeIterationCount < nlp_maxResizeIterations )
				{
					setTimeout ( function ()
					{
						jQuery ( window ). resize () ;
					}, nlp_resizeIterationTimeout ) ;
				}
				console. log ("Iteration: " + nlp_resizeIterationCount ) ;
		} ) ;

	// Process content scroll & update elements accordingly
		function NLP_processContentScroll ()
		{
			jQuery (`#nlp-content-container`). off (`scroll`). on (`scroll`, function ()
			{
				// Get required values
				var currScroll = jQuery ( this ). scrollTop () ;
				var coverPageHeight = jQuery (`#nlp-landing-content-container`). outerHeight () ;
				var footerTop = jQuery (`#nlp-footer`). offset (). top + currScroll - jQuery ( window ). outerHeight () ;
				console. log (`Scrolled through content to ${ currScroll }px with cover height ${ coverPageHeight }px & footer top ${ footerTop }px`) ;

				// Check if scrolled through cover page & the task hasn't already been done
				if ( currScroll > coverPageHeight && nlp_isCoverPageScrolledThrough === false )
				{
					nlp_isCoverPageScrolledThrough = true ;

					// Update elements as needed
					if ( nlp_showLogoAfterCoverPageScrolledThrough === false )
					{
						jQuery (`#nlp-landing-content`). addClass (`nlp-content-landing-overflow`) ;
					}
					else
					{
						jQuery (`#nlp-landing-content-heading`). addClass (`nlp-content-landing-overflow-hidden`) ;
						jQuery (`#nlp-landing-content-byline`). addClass (`nlp-content-landing-overflow-hidden`) ;
					}
					jQuery (`#nlp-content`). addClass (`nlp-content-landing-overflow`) ;
					jQuery (`#nlp-footer`). addClass (`nlp-content-landing-overflow`) ;

					console. log ("Elements updated as content scrolled through cover page") ;
				}
				// Reset styles only if scrolled back to cover page & the task hasn't already been done
				else if ( currScroll < coverPageHeight && nlp_isCoverPageScrolledThrough === true )
				{
					nlp_isCoverPageScrolledThrough = false ;

					// Update elements as needed
					jQuery (`#nlp-landing-content`). removeClass (`nlp-content-landing-overflow`) ;
					jQuery (`#nlp-landing-content-heading`). removeClass (`nlp-content-landing-overflow-hidden`) ;
					jQuery (`#nlp-landing-content-byline`). removeClass (`nlp-content-landing-overflow-hidden`) ;
					jQuery (`#nlp-content`). removeClass (`nlp-content-landing-overflow`) ;
					jQuery (`#nlp-footer`). removeClass (`nlp-content-landing-overflow`) ;

					console. log ("Elements updated as content scrolled back to cover page") ;
				}

				// Check if scrolled through cover page & the task hasn't already been done
				if ( currScroll > footerTop && nlp_isFooterScrolledIntoPage === false )
				{
					nlp_isFooterScrolledIntoPage = true ;

					jQuery (`#nlp-landing-content-logo`). hide () ;

					console. log ("Elements updated as content scrolled through cover page") ;
				}
				// Reset styles only if scrolled back to cover page & the task hasn't already been done
				else if ( currScroll < footerTop && nlp_isFooterScrolledIntoPage === true )
				{
					nlp_isFooterScrolledIntoPage = false ;

					// Update elements as needed
					jQuery (`#nlp-landing-content-logo`). show () ;

					console. log ("Elements updated as content scrolled back to cover page") ;
				}
			} ) ;
		}

	// *WARNING !!!* Unprotected against global prefixing
	// [SST] Resize Functions, From: Dhruvin Modi, Ref: dhruvinmodi2015@gmail.com

		let background_x = 0, background_y = 0, background_w = 1920, background_h = 1080;
		let ori_background_x = 0, ori_background_y = 0, ori_background_w = 1920, ori_background_h = 1080;
		let ratio_w = background_w / EK_gcd(background_w, background_h);
		let ratio_h = background_h / EK_gcd(background_w, background_h);
		let window_width = null;
		let window_height = null;
		let ratio = null;

		function EK_getWindowWidth(){
			return jQuery(window).width();
		}
		function EK_getWindowHeight(){
			return jQuery(window).height();
		}
		function EK_gcd(x, y) {
		  if ((typeof x !== 'number') || (typeof y !== 'number'))
			return false;
		  x = Math.abs(x);
		  y = Math.abs(y);
		  while(y) {
			var t = y;
			y = x % y;
			x = t;
		  }
		  return x;
		}
		function EK_ratioCalc(){

			window_width = EK_getWindowWidth();
			window_height = EK_getWindowHeight();

			if(window_width <= ori_background_w || window_height <= ori_background_h){
				if(window_height < window_width * ratio_h / ratio_w){
					background_h = window_height;
					background_w = window_height * ratio_w / ratio_h;
				}else{
					background_w = window_width;
					background_h = window_width * ratio_h / ratio_w;
				}
			}else{
				if(window_width < window_height){

					background_w = window_width;
					background_h = window_width * ratio_h / ratio_w;
				}else{

					background_h = window_height;
					background_w = window_height * ratio_w / ratio_h;
				}
			}

			background_x = (window_width - background_w) / 2;
			background_y = (window_height - background_h) / 2;
			ratio = background_w / ori_background_w;
		}

	// [SST] Animation Functions, From: Javascript Info, Ref: https://javascript.info/js-animation#timing-functions
		function jsif_quadTimingPower5(timeFraction) {
			return Math.pow(timeFraction, 5)
		}

		function jsif_makeEaseOut(timing) {
			return function(timeFraction) {
				return 1 - timing(1 - timeFraction);
			}
		}

		function jsif_animate({timing, draw, duration}) {

			let start = performance.now();

			requestAnimationFrame(function animate(time) {
				// timeFraction goes from 0 to 1
				let timeFraction = (time - start) / duration;
				if (timeFraction > 1) timeFraction = 1;

				// calculate the current animation state
				let progress = timing(timeFraction)

				draw(progress); // draw it

				if (timeFraction < 1) {
					requestAnimationFrame(animate);
				}

			});
		}

	// [SST] Ring Timer, From: Codepen, Ref: https://codepen.io/lawrencealan/pen/cdwhm?editors=0110
	// Modified a lot as needed & to make it responsive, Details can be found in the comments
		window. nlp_ringer = {
			// [SST] Defined the target date
			// Begin Update
			countdown_to: nlp_targetDate,
			rings: {
				'DAYS': {
					s: 86400000, // mseconds in a day,
					max: 365
				},
				'HOURS': {
					s: 3600000, // mseconds per hour,
					max: 24
				},
				'MINUTES': {
					s: 60000, // mseconds per minute
					max: 60
				},
				'SECONDS': {
					s: 1000,
					max: 60
				},
				// [SST] Updated MICROSEC to MILLISEC
				// Removed MILLISEC later for better UX
				// Begin Update
				// 'MILLISECONDS': {
				// 	s: 1,
				// 	max: 1000
				// }
				// End Update
			 },
			r_count: 4,
			r_spacing: 10, // px
			r_size: 100, // px
			r_thickness: 2, // px
			// [SST] Updated refresh interval to reduce the performance load
			// Begin Update
			update_interval: 500, // ms
			// End Update


			init: function( element ){

				// [SST] Replaced all occurrences of $(...) with jQuery(...).

				// [SST] Updated the reference to global variable
				// Begin Update
				$r = window. nlp_ringer;
				// End Update

				// [SST] Calculated sizes & other params depending on the element passed
				// Begin Update
				EK_ratioCalc () ;
				console. log ("Updated ratio multiplier: " + ratio ) ;
				var elementWidth = jQuery ( element ). outerWidth () ;
				var thickness = 8 * ratio ;
				var spacing = 100 * ratio ;
				var size = elementWidth - ( spacing * ( $r. r_count - 1 ) ) - ( thickness * $r. r_count )
				size /= $r. r_count ;
				console. log ("Timer: ") ;
				console. log (
				{
					"size": size,
					"thickness": thickness,
					"spacing": spacing,
				} ) ;
				$r. r_size = size ;
				$r. r_thickness = thickness ;
				$r. r_spacing = spacing ;

				// Making It Responsive
					var heightMultiplier = 1 ;
					var ringsInRow = $r. r_count ;
					// Static value for portrait mobile screens from applied media queries
					if ( jQuery ( window ). outerWidth () <= 479 )
					{
						ringsInRow = nlp_maxRingsInRow ;
						heightMultiplier = Math. ceil ( $r. r_count / nlp_maxRingsInRow ) ;

						// Update other sizes
						var size = elementWidth - ( spacing * ( nlp_maxRingsInRow - 1 ) ) - ( thickness * nlp_maxRingsInRow )
						size /= nlp_maxRingsInRow ;
						console. log ("Updated Responsive Timer: ") ;
						console. log ( heightMultiplier ) ;
						console. log (
						{
							"size": size,
							"thickness": thickness,
							"spacing": spacing,
						} ) ;
						$r. r_size = size ;
					}
				// End Update

				$r.cvs = document.createElement('canvas');
				// [SST] Added a class to the created canvas
				// Begin Update
				$r.cvs.classList.add('nlp-ringer-timer-canvas');
				// End Update


				// [SST] Made the calculations responsive & logged them
				// Begin Update
				$r.size = {
					w: ($r.r_size + $r.r_thickness) * ringsInRow + ($r.r_spacing*(ringsInRow-1)),
					h: ($r.r_size + $r.r_thickness) * heightMultiplier + ( nlp_spaceBetweenRowsOfRings * ratio * ( heightMultiplier - 1))
				};
				console. log ( $r. size ) ;
				// End Update



				$r.cvs.setAttribute('width',$r.size.w);
				$r.cvs.setAttribute('height',$r.size.h);
				$r.ctx = $r.cvs.getContext('2d');
				// [SST] Emptied the main timer container
				// Begin Update
				jQuery(element).html(``);
				// End Update
				jQuery(element).append($r.cvs);
				$r.cvs = jQuery($r.cvs);
				$r.ctx.textAlign = 'center';
				$r.actual_size = $r.r_size + $r.r_thickness;
				$r.countdown_to_time = new Date($r.countdown_to).getTime();
				$r.cvs.css({ width: $r.size.w+"px", height: $r.size.h+"px" });
				$r.go();
			},
			ctx: null,
			go: function(){
				var idx=0;

				$r.time = (new Date().getTime()) - $r.countdown_to_time;


				for(var r_key in $r.rings) $r.unit(idx++,r_key,$r.rings[r_key]);

				setTimeout($r.go,$r.update_interval);
			},
			unit: function(idx,label,ring) {
				var x,y, value, ring_secs = ring.s;
				value = parseFloat($r.time/ring_secs);
				$r.time-=Math.round(parseInt(value)) * ring_secs;
				value = Math.abs(value);

				// [SST] Making it responsive
				// Begin Update
					var heightMultiplier = 0 ;
					var marginLeftForRow = 0 ;
					// Static value for portrait mobile screens from applied media queries
					if (  jQuery ( window ). outerWidth () <= 479 )
					{
						heightMultiplier = Math. floor ( idx / nlp_maxRingsInRow ) ;
						if ( Math. floor ( idx / nlp_maxRingsInRow ) === Math. floor ( ( $r. r_count - 1 ) / nlp_maxRingsInRow ) )
						{
							var ringsInRow = ( $r. r_count % nlp_maxRingsInRow ) ;
							ringsInRow = ( ringsInRow === 0 ) ? nlp_maxRingsInRow : ringsInRow ;
							marginLeftForRow = ( $r. size. w - (($r.r_size + $r.r_thickness) * ringsInRow + ($r.r_spacing*(ringsInRow-1))) ) * 0.5 ;
							// console. error ( $r. size. w - (($r.r_size + $r.r_thickness) )) ;
							// console. error ( ringsInRow + ($r.r_spacing*(ringsInRow-1))) ;
							// console. log ( marginLeftForRow ) ;
						}

						idx -= ( Math. floor ( idx / nlp_maxRingsInRow ) * nlp_maxRingsInRow ) ;
					}
				// End Update

				// [SST] Making it responsive by adding a little something to x & y
				// Begin Update
				x = ($r.r_size*.5 + $r.r_thickness*.5);
				x +=+(idx*($r.r_size+$r.r_spacing+$r.r_thickness));
				x += marginLeftForRow ; // [SST] New
				y = $r.r_size*.5;
				y += $r.r_thickness*.5;
				y += ( ( $r. r_size + $r. r_thickness + ( nlp_spaceBetweenRowsOfRings * ratio * ( heightMultiplier ) ) ) * heightMultiplier ); // [SST] New
				// End Update


				// calculate arc end angle
				var degrees = 360-(value / ring.max) * 360.0;
				var endAngle = degrees * (Math.PI / 180);

				$r.ctx.save();

				$r.ctx.translate(x,y);
				$r.ctx.clearRect($r.actual_size*-0.5,$r.actual_size*-0.5,$r.actual_size,$r.actual_size);

				// first circle
				$r.ctx.strokeStyle = "rgba(128,128,128,0.2)";
				$r.ctx.beginPath();
				$r.ctx.arc(0,0,$r.r_size/2,0,2 * Math.PI, 2);
				$r.ctx.lineWidth =$r.r_thickness;
				$r.ctx.stroke();

				// second circle
				// [SST] Updated the circle border's color
				// Begin Update
				$r.ctx.strokeStyle = "rgba(184, 73, 27, 0.5)";
				// End Update
				$r.ctx.beginPath();
				$r.ctx.arc(0,0,$r.r_size/2,0,endAngle, 1);
				$r.ctx.lineWidth =$r.r_thickness;
				$r.ctx.stroke();

				// label
				// [SST] Updated the label text's color
				// Begin Update
				$r.ctx.fillStyle = "rgba(184, 73, 27, 0.8)";
				// End Update

				// [SST] Updated the used font for label
				// Begin Update
				$r.ctx.font = $r.r_size*0.1 + 'px Roboto Slab';
				// End Update
				$r.ctx.fillText(label, 0, $r.r_size*0.25);
				$r.ctx.fillText(label, 0, $r.r_size*0.25);

				// [SST] Updated the used font for time
				// Begin Update
				$r.ctx.fillStyle = "#b8491b";
				$r.ctx.font = 'bold ' + $r.r_size*0.4 + 'px Roboto Slab';
				// End Update
				$r.ctx.fillText(Math.floor(value), 0, $r.r_size*0.05);

				$r.ctx.restore();
			}
		}
