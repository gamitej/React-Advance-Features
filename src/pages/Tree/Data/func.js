// ================= FILTER DATA START ==================

const getTotalCountForChildren = (childrenList) => {
  const newCount = {};

  childrenList.map(({ count: countObj }) => {
    Object.entries(countObj).forEach(([name, value]) => {
      if (name in newCount) newCount[name] += value;
      else newCount[name] = value;
    });
  });

  return newCount;
};

export const FilteredStateData = (data) => {
  const { stateData = [], villType = {} } = data;

  const getFilteredData = (stateData) => {
    return stateData
      .map((item) => {
        // ==== IF CHILDREN ===
        if (item.children) {
          const newChildren = getFilteredData(item.children);

          if (newChildren) {
            const totalCountForParent = getTotalCountForChildren(newChildren);

            if (Object.keys(totalCountForParent).length > 0)
              return {
                ...item,
                children: newChildren,
                count: totalCountForParent,
              };

            return null;
          }

          return null;
        }
        // ==== IF NOT CHILDREN ===
        else if (item.type in villType && villType[item.type]) {
          return {
            ...item,
            count: {
              poor: item.type === "poor" ? 1 : 0,
              rich: item.type === "rich" ? 1 : 0,
            },
          };
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
            item.state?.toLowerCase().includes(searchText.toLowerCase()) ||
            false;

          const isCity =
            item.city?.toLowerCase().includes(searchText.toLowerCase()) ||
            false;

          if (isState || isCity || newChildren.length > 0) {
            return {
              ...item,
              children: newChildren.length > 0 ? newChildren : item.children,
            };
          }
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
