import React from "react";

export default function Delete() {
  return (
    <div className="container">
      <section className="display-item">
        <div className="wrapper">
          <ul>
            {this.state.items.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>
                    brought by: {item.user}
                    {item.user === this.state.user.username ||
                    item.user === this.state.user.email ? (
                      <button onClick={() => this.removeItem(item.id)}>
                        Remove Item
                      </button>
                    ) : null}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
