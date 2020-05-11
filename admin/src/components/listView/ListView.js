import React, { useCallback } from 'react';
import ListViewItem from './ListViewItem';
import { useContentPageState } from '../../context/ContentPageContext';
import { selectDocType } from '../../state/actions/contentPageActions';

const ListView = ({ data }) => {
  const [state, dispatch] = useContentPageState();

  const handleListViewItemClick = useCallback(
    (id) => state.id !== id && dispatch(selectDocType(id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.id]
  );
  const showListViewItems = () => {
    if (!data) {
      return null;
    }

    const list = data.documentTypes.map(
      (el) =>
        el && (
          <ListViewItem
            data-testid="content-list-menu-item"
            key={el._id}
            data={el}
            handleClick={handleListViewItemClick}
          />
        )
    );
    return list;
  };
  return <div data-testid="content-list-menu">{showListViewItems()}</div>;
};

export default ListView;
