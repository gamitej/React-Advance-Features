// ================= FILTER DATA START ==================

export const FilteredStateData = (data) => {
  const { stateData = [], villType = {} } = data;

  const getFilteredData = (stateData) => {
    return stateData
      .map((item) => {
        // ==== IF CHILDREN ===
        if (item.children) {
          const newChildren = getFilteredData(item.children);
          return { ...item, children: newChildren };
        }
        // ==== IF NOT CHILDREN ===
        else if (item.type in villType && villType[item.type]) {
          return { ...item };
        }
        return null;
      })
      .filter(Boolean);
  };

  return getFilteredData(stateData);
};

// ================= FILTER DATA END ==================

// ================= SEARCH LOGIC START ==================

export const SearchStateData = (data) => {
  const { stateData = [], searchText = "" } = data;

  const getSearchText = (data) => {
    return data
      .map((item) => {
        // ====== IF CHILDREN =====
        if (item.children) {
          const newChildren = getSearchText(item.children);

          const isState =
            item?.state?.toLowerCase().includes(searchText.toLowerCase()) ||
            false;

          const isCity =
            item?.city?.toLowerCase().includes(searchText.toLowerCase()) ||
            false;

          if (isState || isCity || newChildren.length > 0)
            return { ...item, children: newChildren };
          return null;
        }
        // ====== IF NOT CHILDREN =====
        else {
          const isVillage = item.village
            .toLowerCase()
            .includes(searchText.toLowerCase());
          if (isVillage) return { ...item };
          return null;
        }
      })
      .filter(Boolean);
  };

  return getSearchText(stateData);
};

// ================= SEARCH LOGIC END ==================

// return item.village.toLowerCase().includes(searchText.toLowerCase());
