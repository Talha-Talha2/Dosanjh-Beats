const ARTISTSECTION = document.querySelector('.ARTISTSECTION');

const renderArtists = (data, id) => {
  const ARTISTSHTML = `
    <div class="ARTISTTEMPLETE" data-id="${id}">
      <img scr="">
		
		  <button class="delete" data-id="${id}">🗑️</button>
    
    		  <h2>${data.Name}</h2>

		  <!-- This is the Artist Description! -->
		  <p>${data.Description}</p>

		  <!-- This is the top 5 artist albums and tracks! -->
		  <div class="TOPALBUMS">
			  <h3>Top 5 Albums</h3>
			  <p>${data.Album1}</p>
			  <p>${data.Album2}</p>
			  <p>${data.Album3}</p>
			  <p>${data.Album4}</p>
			  <p>${data.Album5}</p>
		  </div>

		  <div class="TOPTRACKS">
			  <h3>Top 5 Tracks</h3>
			  <p>${data.Track1}</p>
			  <p>${data.Track2}</p>
			  <p>${data.Track3}</p>
			  <p>${data.Track4}</p>
			  <p>${data.Track5}</p>
		  </div>
	
	</div>
  `;

  ARTISTSECTION.innerHTML += ARTISTSHTML
};

const ALBUMSSECTION = document.querySelector('.ALBUMSSECTION');

const renderAlbums = (data, id) => {
  const ALBUMSHTML = `
    <div class="ALBUMTEMPLETE">
    	<img scr="">
     		
       		<button class="delete">🗑️</button>
		
		<h2>${data.Artist}</h2>
		
		<!-- This is the Artist's music Description! -->
		
		<p>${data.MusicDescription}</p>
		
		<!-- This is the artist's 10 albums! -->
		
		<div class="ALBUMS">
			<h3>Top 10 Albums</h3>
			<p>${data.Album1}</p>
			<p>${data.Album2}</p>
			<p>${data.Album3}</p>
			<p>${data.Album4}</p>
			<p>${data.Album5}</p>
   			<p>${data.Album6}</p>
			<p>${data.Album7}</p>
			<p>${data.Album8}</p>
			<p>${data.Album9}</p>
			<p>${data.Album10}</p>
		</div>
	
	</div>
  `;

  ALBUMSSECTION.innerHTML += ALBUMSHTML
};

const TRACKSSECTION = document.querySelector('.TRACKSSECTION');

const renderTracks = (data, id) => {
  const TRACKSHTML = `
    <div class="TRACKSTEMPLETE">
    	<img scr="">
     		
       		<button class="delete">🗑️</button>
		
		<h2>${data.Artist}</h2>
		
		<!-- This is the artist's 10 tracks! -->
		
		<div class="TRACKS">
			<h3>Top 10 Tracks</h3>
			<p>${data.Track1}</p>
			<p>${data.Track2}</p>
			<p>${data.Track3}</p>
			<p>${data.Track4}</p>
			<p>${data.Track5}</p>
   			<p>${data.Track6}</p>
			<p>${data.Track7}</p>
			<p>${data.Track8}</p>
			<p>${data.Track9}</p>
			<p>${data.Track10}</p>
		</div>
	
	</div>
  `;

  TRACKSSECTION.innerHTML += TRACKSHTML
};
