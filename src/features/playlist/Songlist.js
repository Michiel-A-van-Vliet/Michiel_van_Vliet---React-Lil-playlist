function Songlist(props) {
  return (
    <tbody>
      {props.songs.map((song) => (
        <tr key={song.id}>
          <td className="song-row__item">{song.title}</td>
          <td className="song-row__item">{song.artist}</td>
          <td className="song-row__item">{song.genre}</td>
          <td className="song-row__item">{song.rating}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Songlist;
