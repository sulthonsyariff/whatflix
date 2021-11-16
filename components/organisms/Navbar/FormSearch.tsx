import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

export default function FormSearch() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const onSubmit = (event: any) => {
    if (!keyword) {
      event.preventDefault();
    } else {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  const onClick = (event: any) => {
    if (!keyword) {
      event.preventDefault();
    } else {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="search"
          className="form-control search-input"
          placeholder="Search movie..."
          aria-label="Search movie..."
          aria-describedby="basic-addon-search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <span className="input-group-text" id="basic-addon-search">
          <i className="fa fa-search text-white" aria-hidden onClick={onClick} />
        </span>
      </div>
    </form>
  );
}
