package com.getmoney.web.cmm;

@FunctionalInterface
public interface ISupplier<T> {
	public T get();
}
