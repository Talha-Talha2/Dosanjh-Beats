const ARTISTSECTION = document.querySelector('.ARTISTSECTION');

//render recipe data
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
			  <p>${data.Album-1}</p>
			  <p>${data.Album-2}</p>
			  <p>${data.Album-3}</p>
			  <p>${data.Album-4}</p>
			  <p>${data.Album-5}</p>
		  </div>

		  <div class="TOPTRACKS">
			  <h3>Top 5 Tracks</h3>
			  <p>${data.Track-1}</p>
			  <p>${data.Track-2}</p>
			  <p>${data.Track-3}</p>
			  <p>${data.Track-4}</p>
			  <p>${data.Track-5}</p>
		  </div>
	
	</div>
  `;

  ARTISTSECTION.innerHTML += ARTISTSHTML
};
