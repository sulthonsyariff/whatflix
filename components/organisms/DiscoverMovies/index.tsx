import ScrollContainer from 'react-indiana-drag-scroll';
import DiscoverItem from '../../molecules/DiscoverItem';

export default function DiscoverMovies() {
  const discoverItem = [597891, 619297, 508943, 588228, 637534, 525660];

  return (
    <div className="section-discover container-xxxl mt-5 mb-7">
      <div className="mb-4">
        <h2 className="fw-bold">Discover</h2>
      </div>
      <ScrollContainer vertical className="scroll-container discover-wrapper scroll-wrapper pb-5">
        { discoverItem.map((item) => (
          <DiscoverItem id={item} key={item} />
        ))}
      </ScrollContainer>
    </div>
  );
}
