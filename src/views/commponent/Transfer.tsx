import * as React from 'react';
import { Transfer, Switch, Table, Tag } from 'antd';
import difference from 'lodash/difference';

const TableTransfer = ({ leftColumns, rightColumns, ...restProps }: any) => (
  <Transfer {...restProps} showSelectAll={false}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;

      const rowSelection = {
        getCheckboxProps: (item: any) => ({ disabled: listDisabled || item.disabled }),
        onSelectAll(selected: any, selectedRows: any) {
          const treeSelectedKeys = selectedRows
            .filter((item: any) => !item.disabled)
            .map(({ key }: any) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }: any, selected: any) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };

      const mystyle: any = { pointerEvents: listDisabled ? 'none' : null };
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={mystyle}
          onRow={({ key, disabled: itemDisabled }: any) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) return;
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
      );
    }}
  </Transfer>
);

const mockTags = ['cat', 'dog', 'bird'];

const mockData: any = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 4 === 0,
    tag: mockTags[i % 3],
  });
}

const originTargetKeys = mockData
  .filter((item: any) => +item.key % 3 > 1)
  .map((item: any) => item.key);

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag: any) => <Tag>{tag}</Tag>,
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];

export interface Props {}

export interface State {}

class Transfer1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.state = { :  };
  }

  state = {
    targetKeys: originTargetKeys,
    disabled: false,
    showSearch: false,
  };

  onChange = (nextTargetKeys: any) => {
    this.setState({ targetKeys: nextTargetKeys });
  };

  triggerDisable = (disabled: any) => {
    this.setState({ disabled });
  };

  triggerShowSearch = (showSearch: any) => {
    this.setState({ showSearch });
  };
  render() {
    const { targetKeys, disabled, showSearch } = this.state;
    return (
      <div>
        {' '}
        <TableTransfer
          dataSource={mockData}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch={showSearch}
          onChange={this.onChange}
          filterOption={(inputValue: any, item: any) =>
            item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
          }
          leftColumns={leftTableColumns}
          rightColumns={rightTableColumns}
        />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={this.triggerDisable}
          style={{ marginTop: 16 }}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={this.triggerShowSearch}
          style={{ marginTop: 16 }}
        />
      </div>
    );
  }
}

export default Transfer1;
