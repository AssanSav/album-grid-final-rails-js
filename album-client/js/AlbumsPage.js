class AlbumsPage {

  constructor() {
    this.albums = []
    this.formState = {
      title: '',
      artist_name: ''
    }
  }

  renderForm() {
    return `
      <form class="addAlbum">
        <h3>Add Album</h3>
        <p>
          <label class="db">Title</label>
          <input type="text" name="title" value="${this.formState.title}" />
        </p>
        <p>
          <label class="db">Artist Name</label>
          <input type="text" name="artist_name" value="${this.formState.artist_name}" />
        </p>
        <input type="submit" value="Add Album" />
      </form>
    `
  }

  render() {
    return `
      <h1>Hello from AlbumsPage</h1>
      ${this.renderForm()}
    `
  }
}