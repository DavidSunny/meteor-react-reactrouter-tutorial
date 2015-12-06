ConnectionIssueDialog = React.createClass({
  render() {
    // 만일 여러 종류의 알림을 보여줄 필요가 있다면 이것을 재사용 가능한 컴포넌트들로 쪼개야할 것이다.
    // 하지만 우리는 오직 하나의 알림만 가지고 있으므로 여기에 모든 것을 유지할 것이다.
    return (
      <div className="notifications">
        <div className="notification">
          <span className="icon-sync"></span>
          <div className="meta">
            <div className="title-notification">연결 시도중입니다.</div>
            <div className="description">
              네트워크 접속상태가 원활하지 않습니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
});
